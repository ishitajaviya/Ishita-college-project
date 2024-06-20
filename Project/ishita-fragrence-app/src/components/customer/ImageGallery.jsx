import React from "react";
import './style.css';

function ImageGallery ()
{
  return (
    <div>
    <div className="as-seen-in">AS SEEN IN</div>
    <div className="image-gallery">
      <img src="https://isakfragrances.com/cdn/shop/files/Screenshot_2024-01-17_at_3.48.06_PM.png?v=1705486700&width=250" alt="Image 1" />
      <img src="https://isakfragrances.com/cdn/shop/files/Untitled_design-39.png?v=1705494211&width=250" alt="Image 2" />
      <img src="https://isakfragrances.com/cdn/shop/files/Screenshot_2024-01-17_at_3.54.33_PM.png?v=1705487090&width=250" alt="Image 3" />
      <img src="https://isakfragrances.com/cdn/shop/files/Untitled_design-40.png?v=1705494320&width=250" alt="Image 5" />
      <img src="https://isakfragrances.com/cdn/shop/files/Screenshot_2024-01-17_at_5.45.58_PM.png?v=1705493777&width=250" alt="Image 6" />
    </div>
    </div>
  );
};


export default ImageGallery;