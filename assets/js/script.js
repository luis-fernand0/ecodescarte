function quickSearch() {
    const zipCode = document.getElementById('heroZip').value;
    if (zipCode.length >= 5) {
        document.querySelector('#zipCode').value = zipCode;
        document.querySelector('#results').classList.add('show');
        document.querySelector('#results').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 5 dígitos)');
    }
}

function findCenters() {
    const zipCode = document.getElementById('zipCode').value;
    const results = document.getElementById('results');

    if (zipCode.length >= 5) {
        results.classList.add('show');
    } else {
        alert('Por favor, digite um CEP válido (pelo menos 5 dígitos)');
    }
}

function showTips() {
    let tips = document.getElementById('container-tips');
    tips.classList.add('show');

    return;
}

function closeTips() {
    let tips = document.getElementById('container-tips');
    tips.classList.remove('show');
    

    return;
}

function shareInfo() {
    if (navigator.share) {
        navigator.share({
            title: 'Guia de Reciclagem de Lixo Eletrônico - Recicle Inteligente, Viva Verde',
            text: 'Junte-se ao movimento pelo descarte sustentável de eletrônicos! Aprenda como reciclar seus dispositivos de forma responsável.',
            url: window.location.href
        });
    } else {
        const text = 'Junte-se ao movimento verde! Confira este guia completo de reciclagem de lixo eletrônico: ' + window.location.href;
        navigator.clipboard.writeText(text).then(() => {
            alert('🎉 Link copiado para a área de transferência! Compartilhe com amigos e familiares para espalhar a mensagem verde.');
        });
    }
}

document.getElementById('heroZip').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') quickSearch();
});

document.getElementById('zipCode').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') findCenters();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
