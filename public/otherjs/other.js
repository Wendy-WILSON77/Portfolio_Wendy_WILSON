document.addEventListener('DOMContentLoaded', function() {
    console.log('Le fichier JavaScript est bien connecté.');

    const dropdown = document.querySelector('#navbar1 .dropdown-1');
    const button = dropdown.querySelector('.button3');
    const contentMenu = dropdown.querySelector('.contentMenuD');

    button.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.add('active');
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});













