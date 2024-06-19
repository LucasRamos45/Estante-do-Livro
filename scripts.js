document.querySelector('#menu img').addEventListener('click', function() {
    var menuWindow = document.getElementById('menu-window');
    if (menuWindow.classList.contains('hidden')) {
        menuWindow.classList.remove('hidden');
    } else {
        menuWindow.classList.add('hidden');
    }
});

document.addEventListener('click', function(event) {
    var menuWindow = document.getElementById('menu-window');
    var menuIcon = document.querySelector('#menu img');
    if (!menuWindow.contains(event.target) && event.target !== menuIcon) {
        menuWindow.classList.add('hidden');
    }
});

<<<<<<< Updated upstream
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        alert('As senhas não correspondem. Tente novamente.');
    } else {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    }
});

function cadastrarGoogle() {
    // Lógica para cadastro com Google
    alert('Cadastro com Google não implementado.');
}

function cadastrarFacebook() {
    // Lógica para cadastro com Facebook
    alert('Cadastro com Facebook não implementado.');
}
=======
// document.getElementById('heartImg').addEventListener('click', function() {
//     this.src = 'Imagens/heart red2.png';
// });

document.querySelectorAll('.heartImg').forEach(function(img) {
    img.addEventListener('click', function() {
        this.src = 'Imagens/heart red2.png';
    });
});
>>>>>>> Stashed changes
