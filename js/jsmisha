document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    const bg = document.querySelector('.background');
    bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

function downloadFile(fileType) {
    var link = document.createElement("a");
    var filePath;

    if (fileType === 'pdf') {
        filePath = 'шлях_до_pdf_файлу.pdf'; // Замініть це на шлях до вашого PDF файлу
    } else if (fileType === 'doc') {
        filePath = 'шлях_до_doc_файлу.doc'; // Замініть це на шлях до вашого DOC файлу
    }

    link.href = filePath;
    link.download = filePath.split('/').pop(); // Отримуємо ім'я файлу з шляху
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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
