

function downloadFile(fileName) {
    var element = document.createElement('a');
    element.style.display = 'none';
    document.body.appendChild(element);

    if (fileName === 'Trebal de Recerca-Mykhailo Palchynskyi.pdf') {
        element.href = 'Trebal de Recerca-Mykhailo Palchynskyi (2).pdf'; // Замініть це на шлях до вашого PDF файлу
        element.download = 'Trebal de Recerca-Mykhailo Palchynskyi (2).pdf';
    } else if (fileName === 'Trebal de Recerca-Mykhailo Palchynskyi.docx') {
        element.href = 'Trebal de Recerca-Mykhailo Palchynskyi (2).docx'; // Замініть це на шлях до вашого DOCX файлу
        element.download = 'Trebal de Recerca-Mykhailo Palchynskyi (2).docx';
    } else {
        alert('Невідомий файл');
        document.body.removeChild(element);
        return;
    }

    element.click();
    document.body.removeChild(element);
}
