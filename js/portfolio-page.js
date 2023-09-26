document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.querySelector('#lightbox');
    const lightbox_img = document.querySelector('#lightbox-img');
    
    const images = document.querySelectorAll('.gallery-holder li img');
    
    images.forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active');
    
        lightbox_img.src = image.src;
      })
    })
    
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
    
        lightbox.classList.remove('active');
    })
})