document.querySelector('.left-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('left-menu').classList.add('active');
});
document.querySelector('.left-text').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        this.classList.add('hidden');
        document.getElementById('left-menu').classList.add('active');
    }
});

document.querySelector('.right-text').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('right-menu').classList.add('active');
});
document.querySelector('.right-text').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        this.classList.add('hidden');
        document.getElementById('right-menu').classList.add('active');
    }
});

// Código del desplegable de cine eliminado - ahora Cine va directo a cine.html
