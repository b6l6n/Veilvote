function swipe (buttonElement,respuesta){
    const contenedor = buttonElement.closest('.contenedor');
    const carta = contenedor.querySelector('.carta');
    const mensaje= contenedor.querySelector('.mensaje');

    if (respuesta === 'si') {
        carta.classList.add('swipe-izquierda');
        mensaje.textContent = 'escogida como opcion :)';
    }else{
        carta.classList.add('swipe-derecha');
        mensaje.textContent = 'descartada:(';
    }

    
    setTimeout(() => {
        carta.style.display = 'none';
      }, 600);
    }