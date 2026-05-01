import { useEffect } from 'react';

/**
 * AssetPreloader Utility
 * Used to preload images and videos for upcoming pages in the background.
 */
export default function AssetPreloader({ assets = [] }) {
  useEffect(() => {
    if (!assets || assets.length === 0) return;

    const timeoutId = setTimeout(() => {
      assets.forEach(asset => {
        if (!asset) return;
        
        if (asset.endsWith('.mp4') || asset.endsWith('.webm')) {
          const video = document.createElement('video');
          video.src = asset;
          video.preload = 'auto';
        } else if (asset.match(/\.(png|jpe?g|webp|avif|gif)$/i)) {
          const img = new Image();
          img.src = asset;
        }
      });
    }, 1000); // Start preloading after 1s to not interfere with initial page load

    return () => clearTimeout(timeoutId);
  }, [assets]);

  return null;
}
