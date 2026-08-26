Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-principal-clean.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Current Image Dimensions: $($img.Width) x $($img.Height)"

# Inspect from Y = 500 to 770 to find where the bottom maroon bar begins
for ($y = 550; $y -lt $img.Height; $y += 5) {
    $pixel = $img.GetPixel(100, $y)
    Write-Host "Y=$y : R=$($pixel.R), G=$($pixel.G), B=$($pixel.B)"
}

$img.Dispose()
