
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x:0.5 , y:0.5 }
        });
    });
});

function sendEmail() {
  window.location = "mailto:@gmail.com"; 
}  

function scrollme(name) {
        document.querySelector("." + name).scrollIntoView({ behavior: "smooth" });
}

function back() {
        document.querySelector(".main").scrollIntoView({ behavior: "smooth" });
}


function applyGlitchEffectOnView(element) {
    if (!element || !element.textContent) return;

    const originalText = element.textContent.trim();
    const alphaCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ \'';
    const alpha = 'abcdefghijklmnopqrstuvwxyz \'';

    let output = "";
    let progress = 0;
    const len = originalText.length;

    function glitch() {
        if (progress >= len) return;

        let randomChar = alpha[Math.floor(Math.random() * alpha.length)];
        if (randomChar === originalText[progress] || alphaCaps.includes(originalText[progress])) {
            output += originalText[progress];
            element.textContent = output;
            progress++;
        } else {
            element.textContent = `${output}${randomChar}`;
        }
        setTimeout(glitch, 10); 
    }

    function startGlitch() {
        output = "";
        progress = 0;
        glitch();
    }

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startGlitch(); // Inicia o efeito quando o elemento entra na tela
            }
        });
    }, { threshold: 0.5 }); // Ativa quando 50% do elemento estiver visível

    observer.observe(element);
}

// Exemplo: aplicar em todas as divs com a classe "glitch"
document.querySelectorAll(".text-scramble").forEach(applyGlitchEffectOnView);
