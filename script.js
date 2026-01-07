document.querySelector('.left-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('left-menu').classList.add('active');
});

document.querySelector('.right-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('right-menu').classList.add('active');
});

// Cine click handler
document.getElementById('cine-link').addEventListener('click', function(e) {
    e.preventDefault();
    const cineListContainer = document.getElementById('cine-list');
    const leftMenu = document.getElementById('left-menu');

    // Toggle the list visibility
    if (cineListContainer.classList.contains('active')) {
        cineListContainer.classList.remove('active');
        leftMenu.classList.add('active');
    } else {
        // Hide the menu and show the cine list
        leftMenu.classList.remove('active');

        // List of folders in Audiovisual\Cine
        const cineItems = [
            'La Reserva',
            'Mujeres de mi Patria, Historia de las delegadas de Evita',
            'Un espejo no-coincidente',
            'RESTART',
            'Ob Scena',
            'El Desfile',
            'Sinfonía de Cristal',
            'Entrecruces',
            'Relato de Mar',
            'Bernarda es la Patria',
            'Las Hijas del Fuego',
            'Archivos del Goce',
            'Pampa Stalingrado'
        ];

        // Populate the list
        const ul = cineListContainer.querySelector('.cine-items');
        ul.innerHTML = '';
        cineItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            // Convert folder name to URL-friendly format
            const urlName = item.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '-')
                .replace(/,/g, '');
            a.href = `cine/${urlName}.html`;
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        });

        cineListContainer.classList.add('active');
    }
});

// Cine back button handler
document.getElementById('cine-back').addEventListener('click', function() {
    document.getElementById('cine-list').classList.remove('active');
    document.getElementById('left-menu').classList.add('active');
});
