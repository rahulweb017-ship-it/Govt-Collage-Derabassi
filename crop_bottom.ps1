Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-principal-clean.png"
$destPath = "C:\Users\SAM\Documents\Gc derabassi\gcd-website\public\images\slides\slide-1-principal-clean.png"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# The bottom bar starts at Y = 612.
$cropHeight = 612
$cropWidth = $img.Width

$rect = New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)
$cropped = $img.Clone($rect, $img.PixelFormat)

$img.Dispose()

$cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

Write-Host "Successfully cropped bottom bar! New dimensions: $cropWidth x $cropHeight"
