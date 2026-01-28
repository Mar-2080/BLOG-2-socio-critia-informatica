// script.js: vista previa de imagenes subidas en cada card
document.addEventListener('DOMContentLoaded', function () {
  // Para cada input .img-uploader asociarlo con la imagen de su card
  const uploaders = document.querySelectorAll('.img-uploader');

  uploaders.forEach(input => {
    input.addEventListener('change', function (ev) {
      const file = input.files && input.files[0];
      if (!file) return;

      // validar tipo
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen.');
        input.value = '';
        return;
      }

      const card = input.closest('.card');
      const img = card.querySelector('.card-img');

      // URL temporal para previsualizar
      const url = URL.createObjectURL(file);
      img.src = url;

      // opcional: liberar el objectURL cuando ya no se necesite
      img.onload = () => {
        URL.revokeObjectURL(url);
      };
    });
  });
});