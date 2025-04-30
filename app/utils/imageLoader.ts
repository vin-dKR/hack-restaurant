export async function getImageWithPlaceholder(src: string) {
  try {
    // Create a canvas to generate blur data
    const img = new Image();
    img.src = src;
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Set small size for blur
    canvas.width = 40;
    canvas.height = 40;

    // Draw and blur
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(10px)';
    ctx.drawImage(canvas, 0, 0);

    return {
      src,
      blurDataURL: canvas.toDataURL('image/jpeg', 0.1)
    };
  } catch (error) {
    console.error('Error loading image:', error);
    return {
      src,
      blurDataURL: ''
    };
  }
} 