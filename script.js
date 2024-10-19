document.querySelectorAll('.image-wrapper2').forEach(wrapper => {
    wrapper.addEventListener('mousemove', (event) => {
        const { offsetWidth, offsetHeight } = wrapper;
        const x = event.clientX - wrapper.getBoundingClientRect().left; // Posição do mouse em relação ao wrapper
        const y = event.clientY - wrapper.getBoundingClientRect().top;

        // Calcular os valores de rotação baseados na posição do mouse
        const rotateX = ((y / offsetHeight) - 0.5) * 40; // Aumentando para 40
        const rotateY = -((x / offsetWidth) - 0.5) * 40; // Aumentando para 40

        wrapper.querySelector('img').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        // Resetar a transformação quando o mouse sai do wrapper
        wrapper.querySelector('img').style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});

// Obtendo o modal
var modal = document.getElementById("myModal");

// Obtendo o botão que fecha o modal
var span = document.getElementById("closeModal");

// Verifica se o aviso já foi exibido
if (!localStorage.getItem("avisoExibido")) {
    window.onload = function() {
        modal.style.display = "block"; // Mostra o modal ao carregar a página
        localStorage.setItem("avisoExibido", "true"); // Marca que o aviso foi exibido
    };
} else {
    modal.style.display = "none"; // Esconde o modal se já foi exibido
}

// Quando o usuário clica no "x", fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Exibir o botão ao rolar
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.classList.add('show'); // Adiciona a classe show
        } else {
            scrollToTopButton.classList.remove('show'); // Remove a classe show
        }
    };

    // Função para rolar para o topo
    scrollToTopButton.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    };
});
