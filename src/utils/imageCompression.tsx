import imageCompression from 'browser-image-compression';

async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
  const file = event.target.files?.[0];
  if (!file) return;

  const options = { maxSizeMB: 1, maxWidthOrHeight: 800, useWebWorker: true };
  try {
    const compressedFile = await imageCompression(file, options);
    console.log('Imagen comprimida:', compressedFile);
  } catch (error) {
    console.error('Error al comprimir imagen:', error);
  }
}
