document.querySelector('.left-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('left-menu').classList.add('active');
});

document.querySelector('.right-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('right-menu').classList.add('active');
});

const menuItems = document.querySelectorAll('.menu-list li');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const text = this.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        document.body.className = 'show-' + text;
    });
    item.addEventListener('mouseleave', function() {
        document.body.className = '';
    });
});
