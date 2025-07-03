import { v2 as cloudinary } from 'cloudinary';

(async function() {
  // 1. CONFIGURAÇÃO DO CLOUDINARY
  cloudinary.config({ 
    cloud_name: 'dn7788hhw', 
    api_key: '932164957279969', 
    api_secret: 'SUA_API_SECRET_AQUI' // 🔒 Substitua pelo seu segredo real
  });

  // 2. UPLOAD DA IMAGEM DO IPHONE
  const uploadResult = await cloudinary.uploader
    .upload(
      'https://files.chatgpt.com/file-FRmwWa5NkHXHGy74wFKePg', // 📸 Imagem do iPhone
      {
        public_id: 'iphone13-preto',
        folder: 'rifas', // opcional, se quiser organizar por pasta
      }
    )
    .catch((error) => {
      console.error('❌ Erro no upload:', error);
    });

  // 3. LINK OTIMIZADO (qualidade + formato automáticos)
  if (uploadResult) {
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto',
    });

    // 4. LINK CROP AUTOMÁTICO (ex: para ícone ou imagem quadrada)
    const autoCropUrl = cloudinary.url(uploadResult.public_id, {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
    });

    console.log('✅ Link otimizado:', optimizeUrl);
    console.log('✅ Link quadrado (500x500):', autoCropUrl);
  }
})();
