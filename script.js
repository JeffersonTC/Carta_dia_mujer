document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const card = document.getElementById('card');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const flowerContainer = document.getElementById('flowerContainer');
    const celebrateBtn = document.getElementById('celebrateBtn');

    // Abrir carta al hacer clic en el sobre
    envelope.addEventListener('click', function () {
        envelope.classList.add('opened');

        setTimeout(() => {
            card.classList.add('active');
            overlay.classList.add('active');
            // Crear flores cuando se abre la carta
            createFlowers();
        }, 1000);
    });

    // Cerrar carta
    closeBtn.addEventListener('click', function () {
        card.classList.remove('active');
        overlay.classList.remove('active');

        setTimeout(() => {
            envelope.classList.remove('opened');
        }, 500);
    });

    // Crear flores
    function createFlowers() {
        flowerContainer.innerHTML = '';
        const flowerColors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3'];
        const flowerCount = 12;

        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';

            // Crear SVG de flor
            const size = Math.random() * 20 + 20;
            const color = flowerColors[Math.floor(Math.random() * flowerColors.length)];

            flower.innerHTML = `
                <svg width="${size}" height="${size}" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="15" fill="${color}" />
                    <g>
                        <ellipse cx="50" cy="20" rx="15" ry="20" fill="${color}" />
                        <ellipse cx="80" cy="50" rx="20" ry="15" fill="${color}" />
                        <ellipse cx="50" cy="80" rx="15" ry="20" fill="${color}" />
                        <ellipse cx="20" cy="50" rx="20" ry="15" fill="${color}" />
                    </g>
                </svg>
            `;

            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 5;
            const leftPos = Math.random() * 600 - 300;

            flower.style.left = `${leftPos}px`;
            flower.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
            flower.style.bottom = `${Math.random() * 50 + 100}px`;

            flowerContainer.appendChild(flower);
        }
    }

    // Crear confeti
    function createConfetti() {

        const colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#ffeb3b', '#ff9800'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            const size = Math.random() * 8 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];

            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.left = `${Math.random() * 100}%`;

            const animationDuration = Math.random() * 3 + 2;
            const animationDelay = Math.random() * 0.5;

            confetti.style.animation = `confettiFall ${animationDuration}s forwards ${animationDelay}s`;

            document.body.appendChild(confetti);

            // Eliminar confeti después de caer
            setTimeout(() => {
                confetti.remove();
            }, (animationDuration + animationDelay) * 1000);
        }
    }

    // Evento del botón
    celebrateBtn.addEventListener('click', function () {
        createConfetti();

        // Efecto 3D en la tarjeta
        card.style.transform = 'translate(-50%, -50%) scale(1.05) rotateY(5deg)';
        setTimeout(() => {
            card.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 1000);

        // Cambiar mensaje
        const messages = [
            "Feliz Día de la Mujer, mi amor! Eres increíble! 💖",
            "Feliz Día de la Mujer, mi amor. Aunque no lo diga siempre, te quiero un montón! 😘",
            "¡Mucho éxito en tu vida!",
            "Llevamos solo un mes juntos, pero ya tengo claro que eres como el WiFi: indispensable Gracias por ser increíble, hermosa y por no bloquearme todavía. Te adoro!💕."

        ];
        const messageBox = document.querySelector('.message p');

        const randomIndex = Math.floor(Math.random() * messages.length);
        messageBox.textContent = messages[randomIndex];
        // Efecto en el mensaje
        const message = document.querySelector('.message');
        message.style.transform = 'translateY(-15px)';
        setTimeout(() => {
            message.style.transform = 'translateY(-5px)';
        }, 300);
    });
});