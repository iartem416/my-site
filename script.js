// Ждем, пока весь HTML-документ будет загружен
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Динамическое изменение текста
    const namePlaceholder = document.getElementById('name-placeholder');
    const userName = "Артем"; // Замените на свое имя
    
    // Запускаем эффект "печатания"
    let i = 0;
    function typeWriter() {
        if (i < userName.length) {
            namePlaceholder.textContent += userName.charAt(i);
            i++;
            setTimeout(typeWriter, 120); // Задержка в 100 миллисекунд
        }
    }

    // Очищаем и запускаем
    namePlaceholder.textContent = '';
    typeWriter();

    // 2. Обработчик события для кнопки
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', () => {
        // Простая навигация при клике на кнопку (переход к секции Обо мне)
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        
        // Можете добавить здесь анимацию или модальное окно
        console.log('Кнопка "Узнать больше" была нажата!');
    });

});