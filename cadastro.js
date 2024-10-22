

function cadastrar() {
    var novoLogin = document.getElementById('novoLogin').value;
    var novaSenha = document.getElementById('novaSenha').value;
    
    // Armazena o login e a senha no localStorage
    localStorage.setItem('login', novoLogin);
    localStorage.setItem('senha', novaSenha);
    
    alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
    window.location.href = 'login.html'; // Redireciona para a página de login
}

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    // Obtém o login e a senha do localStorage
    var storedLogin = localStorage.getItem('login');
    var storedSenha = localStorage.getItem('senha');
    
    // Validação
    if (login === storedLogin && senha === storedSenha) {
        alert('sucesso');
        window.location.href = 'fale.html'; // Redireciona para uma página de sucesso
    } else {
        alert('Login ou senha incorretos');
    }
}
