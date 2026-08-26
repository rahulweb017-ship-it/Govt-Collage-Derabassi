Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-banner.png"
$destPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-principal-clean.png"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Exact crop: remove top 169px (which was the duplicate header)
$cropY = 169
$cropHeight = $img.Height - $cropY
$cropWidth = $img.Width

$rect = New-Object System.Drawing.Rectangle(0, $cropY, $cropWidth, $cropHeight)
$cropped = $img.Clone($rect, $img.PixelFormat)

$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Successfully cropped image without header to: $destPath ($cropWidth x $cropHeight)"

$cropped.Dispose()
$img.Dispose()
