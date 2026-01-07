const videos = [
    'https://player.vimeo.com/video/1137450387?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/1137451067?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/1148793408?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0'
];

// Crear múltiples pop-ups
const numPopups = 15;
const numTextBoxes = 5;

// Definir márgenes de seguridad absolutos
const MARGIN_LEFT = 300;  // Espacio para texto fijo
const MARGIN_RIGHT = 50;
const MARGIN_TOP = 100;  // Espacio para botón volver
const MARGIN_BOTTOM = 50;

// Calcular área de contenido (donde van los videos)
// El área de videos ocupa el espacio central después de los márgenes
const contentAreaWidth = window.innerWidth - MARGIN_LEFT - MARGIN_RIGHT;
const contentAreaHeight = window.innerHeight - MARGIN_TOP - MARGIN_BOTTOM;

// Posición inicial del área de contenido
const offsetX = MARGIN_LEFT;
const offsetY = MARGIN_TOP;

// Configurar cuadrícula
const cols = 4;
const rows = Math.ceil((numPopups + numTextBoxes) / cols);
const cellWidth = contentAreaWidth / cols;
const cellHeight = contentAreaHeight / rows;

// Crear videos
for (let i = 0; i < numPopups; i++) {
    setTimeout(() => {
        const popup = document.createElement('div');
        popup.className = 'popup-container';

        // Calcular posición en la cuadrícula
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Posición base de la celda
        const cellX = offsetX + col * cellWidth;
        const cellY = offsetY + row * cellHeight;

        // Agregar aleatoriedad dentro de la celda
        const randomX = (Math.random() - 0.5) * cellWidth * 0.8;
        const randomY = (Math.random() - 0.5) * cellHeight * 0.8;

        const left = cellX + cellWidth / 2 - 108 + randomX;
        const top = cellY + cellHeight / 2 - 192 + randomY;

        popup.style.left = left + 'px';
        popup.style.top = top + 'px';

        // Rotar entre los 3 videos
        const videoUrl = videos[i % 3];

        // Agregar tiempo aleatorio de inicio (entre 0 y 7 segundos)
        const randomTime = Math.floor(Math.random() * 7);
        const videoUrlWithTime = `${videoUrl}#t=${randomTime}s`;

        popup.innerHTML = `
            <iframe
                src="${videoUrlWithTime}"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        `;

        document.body.appendChild(popup);
        makeDraggable(popup);

        // Agregar vibración aleatoria tipo MSN después de 15 segundos
        setTimeout(() => {
            setInterval(() => {
                if (Math.random() > 0.8) {
                    popup.classList.add('shaking');
                    setTimeout(() => {
                        popup.classList.remove('shaking');
                    }, 500);
                }
            }, 5000 + Math.random() * 5000);
        }, 15000);

    }, i * 150);
}

// Crear cuadros de texto
const textMessages = [
    '¡OFERTA ESPECIAL!<br><br>Haz clic aquí para ganar $1000',
    'FELICIDADES<br><br>Eres el visitante número 1,000,000',
    'DESCARGA GRATIS<br><br>Tonos para tu celular',
    'ALERTA DE VIRUS<br><br>Tu computadora está infectada',
    'CONOCE GENTE NUEVA<br><br>Chatea ahora gratis'
];

for (let i = 0; i < numTextBoxes; i++) {
    setTimeout(() => {
        const textBox = document.createElement('div');
        textBox.className = 'text-box';

        // Posicionar dentro del área central igual que los videos
        const col = (numPopups + i) % cols;
        const row = Math.floor((numPopups + i) / cols);

        const cellX = offsetX + col * cellWidth;
        const cellY = offsetY + row * cellHeight;

        const randomX = (Math.random() - 0.5) * cellWidth * 0.8;
        const randomY = (Math.random() - 0.5) * cellHeight * 0.8;

        const left = cellX + cellWidth / 2 - 108 + randomX;
        const top = cellY + cellHeight / 2 - 192 + randomY;

        textBox.style.left = left + 'px';
        textBox.style.top = top + 'px';
        textBox.innerHTML = textMessages[i % textMessages.length];

        document.body.appendChild(textBox);
        makeDraggable(textBox);

        // Agregar vibración aleatoria
        setTimeout(() => {
            setInterval(() => {
                if (Math.random() > 0.8) {
                    textBox.classList.add('shaking');
                    setTimeout(() => {
                        textBox.classList.remove('shaking');
                    }, 500);
                }
            }, 5000 + Math.random() * 5000);
        }, 15000);

    }, (numPopups + i) * 150);
}

// Sistema de arrastre
let draggedElement = null;
let offsetXDrag = 0;
let offsetYDrag = 0;

function makeDraggable(element) {
    element.addEventListener('mousedown', function(e) {
        draggedElement = element;
        const rect = element.getBoundingClientRect();
        offsetXDrag = e.clientX - rect.left;
        offsetYDrag = e.clientY - rect.top;
        element.style.zIndex = 1000;
        e.preventDefault();
    });
}

document.addEventListener('mousemove', function(e) {
    if (draggedElement) {
        draggedElement.style.left = (e.clientX - offsetXDrag) + 'px';
        draggedElement.style.top = (e.clientY - offsetYDrag) + 'px';
    }
});

document.addEventListener('mouseup', function() {
    if (draggedElement) {
        draggedElement.style.zIndex = 1;
        draggedElement = null;
    }
});
