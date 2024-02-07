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


