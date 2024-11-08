document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', () => {
        const qnsDiv = button.parentElement; // Obtiene el contenedor de la pregunta
        const answer = qnsDiv.querySelector('p'); // Selecciona el párrafo de respuesta
        const plusIcon = button.querySelector('.fa-plus');
        const minusIcon = button.querySelector('.fa-minus');

        // Alterna la visibilidad de la respuesta
        if (answer.classList.contains('hide')) {
            answer.classList.remove('hide');
            plusIcon.classList.add('hide');
            minusIcon.classList.remove('hide');
        } else {
            answer.classList.add('hide');
            plusIcon.classList.remove('hide');
            minusIcon.classList.add('hide');
        }
    });
});