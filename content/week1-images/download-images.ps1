# Download free stock images for TikTok content
# Using direct URLs from Unsplash (free to use)

$downloads = @(
    @{ url = "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1024&h=1536&fit=crop"; path = "post1\1.png"; name = "MAC lipstick close-up" },
    @{ url = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1024&h=1536&fit=crop"; path = "post1\2.png"; name = "Multiple MAC products on table" },
    @{ url = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1024&h=1536&fit=crop"; path = "post1\5.png"; name = "Makeup collection on vanity" },
    @{ url = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1024&h=1536&fit=crop"; path = "post2\1.png"; name = "Person looking shocked" },
    @{ url = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1024&h=1536&fit=crop"; path = "post2\2.png"; name = "Estee Lauder products" },
    @{ url = "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1024&h=1536&fit=crop"; path = "post2\3.png"; name = "Clinique products" },
    @{ url = "https://images.unsplash.com/photo-1556228841-a0c1b7a97de4?w=1024&h=1536&fit=crop"; path = "post2\5.png"; name = "Close-up of Clinique product" },
    @{ url = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1024&h=1536&fit=crop"; path = "post3\1.png"; name = "Collection of indie beauty brands" },
    @{ url = "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1024&h=1536&fit=crop"; path = "post3\2.png"; name = "Too Faced products" },
    @{ url = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=1536&fit=crop"; path = "post3\3.png"; name = "Estee Lauder corporate building" },
    @{ url = "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1024&h=1536&fit=crop"; path = "post3\4.png"; name = "Smashbox products" }
)

Write-Host "Starting downloads..."

foreach ($item in $downloads) {
    Write-Host "Downloading: $($item.name)..."
    try {
        $fullPath = Join-Path $PSScriptRoot $item.path
        Invoke-WebRequest -Uri $item.url -OutFile $fullPath -UserAgent "Mozilla/5.0"
        Write-Host "Done: $($item.name)"
        Start-Sleep -Milliseconds 500
    }
    catch {
        Write-Host "Failed: $($_.Exception.Message)"
    }
}

Write-Host "All downloads complete!"
