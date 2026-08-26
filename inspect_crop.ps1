Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-banner.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Original Image Dimensions: $($img.Width) x $($img.Height)"

# In slide -1.png (1920x1080 approx), the top maroon utility bar is ~48px and the white navbar is ~140px, total top header is ~188px
# Let's find where the background begins:
# The header ends and the beige/ivory wall of the principal's room begins around Y = 186 to 190.
# Let's inspect pixel colors around Y = 170 to 220.
for ($y = 150; $y -lt 250; $y += 5) {
    $pixel = $img.GetPixel(100, $y)
    Write-Host "Y=$y : R=$($pixel.R), G=$($pixel.G), B=$($pixel.B)"
}

$img.Dispose()
