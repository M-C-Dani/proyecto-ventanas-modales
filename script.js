// Definición de variables y referenciación de elementos del DOM

const modal = document.querySelector('.modal'); // Selecciona el elemento del modal
const overlay = document.querySelector('.overlay'); // Selecciona el elemento de superposición
const btnCloseModal = document.querySelector('.close-modal'); // Selecciona el botón de cerrar el modal
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Selecciona todos los botones para abrir el modal

// Función para abrir el modal
const openModal = function () {
    modal.classList.remove('hidden'); // Elimina la clase 'hidden' para mostrar el modal
    overlay.classList.remove('hidden'); // Elimina la clase 'hidden' para mostrar la superposición
};

// Función para cerrar el modal
const closeModal = function () {
    modal.classList.add('hidden'); // Añade la clase 'hidden' para ocultar el modal
    overlay.classList.add('hidden'); // Añade la clase 'hidden' para ocultar la superposición
};

// Asociamos un listener a cada botón para abrir el modal
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Asociamos un listener al botón de cerrar modal para cerrar el modal
btnCloseModal.addEventListener('click', closeModal);

// Asociamos un listener a la superposición para cerrar el modal cuando se hace clic fuera del mismo
overlay.addEventListener('click', closeModal);


