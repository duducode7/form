/* ===========================
   Contador Formatura
=========================== */
const dataFormatura = new Date("2025-12-20 22:00:00");

function atualizarContagem() {
    const agora = new Date();
    const diff = dataFormatura - agora;

    if (diff < 0) return;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("contador").innerHTML =
        `${dias} dias • ${horas} horas • ${mins} minutos`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

function pageTransition() {
    const body = document.body;
    body.classList.add('page-transition');
    setTimeout(() => {
        body.classList.remove('page-transition');
    }, 700);
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html')) {
                e.preventDefault();
                pageTransition();
                setTimeout(() => {
                    window.location.href = href;
                }, 350);
            }
        });
    });
});