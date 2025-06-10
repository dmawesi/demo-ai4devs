// Nuestra función flecha para revertir la cadena
const revertirCadena = (cadena) => {
    return cadena.split('').reverse().join('');
};

// Obtenemos referencias a los elementos del DOM
const inputString = document.getElementById('inputString');
const reverseButton = document.getElementById('reverseButton');
const outputString = document.getElementById('outputString');
const copyButton = document.getElementById('copyButton');

// Event listener para el botón "Reverse"
reverseButton.addEventListener('click', () => {
    const originalText = inputString.value;
    const reversedText = revertirCadena(originalText);
    outputString.textContent = reversedText; // Actualiza el contenido del div de salida
});

// Event listener para el botón "Copy"
copyButton.addEventListener('click', () => {
    const textToCopy = outputString.textContent;
    if (textToCopy) { // Solo intenta copiar si hay texto
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('¡Cadena copiada al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
                alert('No se pudo copiar el texto. Por favor, inténtalo manualmente.');
            });
    } else {
        alert('No hay texto para copiar.');
    }
});

// Opcional: Revertir al presionar Enter en el input
inputString.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        reverseButton.click(); // Simula un clic en el botón de revertir
    }
});