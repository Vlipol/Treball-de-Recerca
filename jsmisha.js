document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    const bg = document.querySelector('.background');
    bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const contents = document.querySelectorAll('.content');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.dataset.target;

            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });
});
