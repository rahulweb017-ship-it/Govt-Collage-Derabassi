const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BASE_URL = 'https://gcderabassi.ac.in';
const TARGET_DIR = path.join(__dirname, 'public', 'images', 'old_site');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

function fetchUrl(urlStr) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = new URL(urlStr, BASE_URL);
      const client = parsed.protocol === 'https:' ? https : http;
      client.get(parsed.href, { 
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        rejectUnauthorized: false 
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchUrl(new URL(res.headers.location, parsed.href).href).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Status ${res.statusCode} for ${urlStr}`));
        }
        const contentType = res.headers['content-type'] || '';
        if (contentType.includes('image') || urlStr.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i)) {
          const chunks = [];
          res.on('data', chunk => chunks.push(chunk));
          res.on('end', () => resolve({ buffer: Buffer.concat(chunks), isBinary: true, contentType }));
        } else {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve({ data, isBinary: false, contentType }));
        }
      }).on('error', reject);
    } catch (e) {
      reject(e);
    }
  });
}

const visitedPages = new Set();
const foundImageUrls = new Set();

async function crawlPage(urlStr) {
  try {
    const parsed = new URL(urlStr, BASE_URL);
    if (parsed.hostname !== new URL(BASE_URL).hostname) return;
    if (visitedPages.has(parsed.href)) return;
    visitedPages.add(parsed.href);

    console.log(`Crawling page: ${parsed.href}`);
    const res = await fetchUrl(parsed.href);
    if (!res || res.isBinary) return;

    const html = res.data;
    
    // Find all images
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      try {
        const fullImgUrl = new URL(match[1], parsed.href).href;
        foundImageUrls.add(fullImgUrl);
      } catch (e) {}
    }

    // Also look for background images or links to images
    const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
    while ((match = bgRegex.exec(html)) !== null) {
      try {
        if (match[1].match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i)) {
          const fullImgUrl = new URL(match[1], parsed.href).href;
          foundImageUrls.add(fullImgUrl);
        }
      } catch (e) {}
    }

    // Find links to other internal pages
    const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
    const linksToVisit = [];
    while ((match = linkRegex.exec(html)) !== null) {
      try {
        const linkUrl = new URL(match[1], parsed.href);
        if (linkUrl.hostname === new URL(BASE_URL).hostname && !visitedPages.has(linkUrl.href)) {
          if (!linkUrl.href.match(/\.(pdf|doc|docx|zip|jpg|jpeg|png|gif)$/i)) {
            linksToVisit.push(linkUrl.href);
          }
        }
      } catch (e) {}
    }

    for (const link of linksToVisit.slice(0, 20)) {
      if (visitedPages.size < 30) {
        await crawlPage(link);
      }
    }
  } catch (err) {
    console.error(`Error crawling ${urlStr}:`, err.message);
  }
}

async function downloadImages() {
  console.log('Starting crawl from homepage...');
  await crawlPage(BASE_URL);
  
  // Specific known pages
  const extraPages = [
    '/gallery',
    '/gallery.php',
    '/about-us',
    '/about.php',
    '/principal-message',
    '/principal.php',
    '/faculty',
    '/faculty.php',
    '/infrastructure',
    '/infrastructure.php',
    '/sports',
    '/sports.php',
    '/ncc',
    '/nss',
    '/contact-us',
    '/contact.php',
    '/iqac',
    '/naac'
  ];

  for (const page of extraPages) {
    await crawlPage(`${BASE_URL}${page}`);
  }

  console.log(`\nFound ${foundImageUrls.size} unique image URLs.`);
  
  const manifest = [];
  let count = 0;
  for (const imgUrl of foundImageUrls) {
    try {
      const parsed = new URL(imgUrl);
      let filename = path.basename(parsed.pathname) || `img_${count}.jpg`;
      filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
      if (!filename.includes('.')) filename += '.jpg';
      
      const filePath = path.join(TARGET_DIR, filename);
      console.log(`Downloading: ${imgUrl} -> ${filename}`);
      
      const res = await fetchUrl(imgUrl);
      if (res && res.buffer) {
        fs.writeFileSync(filePath, res.buffer);
        manifest.push({
          originalUrl: imgUrl,
          filename: filename,
          localPath: `/images/old_site/${filename}`,
          sizeBytes: res.buffer.length
        });
        count++;
      }
    } catch (e) {
      console.error(`Failed to download ${imgUrl}:`, e.message);
    }
  }

  fs.writeFileSync(
    path.join(TARGET_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nSuccessfully downloaded ${count} images to ${TARGET_DIR}`);
  console.log(`Manifest created at ${path.join(TARGET_DIR, 'manifest.json')}`);
}

downloadImages();
