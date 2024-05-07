document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // Validações com expressões regulares
        const nomeValido = /^[^\d]{1,100}$/.test(nome);
        const emailValido = /\S+@\S+\.\S+/.test(email);
        const telefoneValido = /^[0-9]{2}\s[0-9]{4,5}-[0-9]{4}$/.test(telefone);

        if (!nomeValido) {
            alert('Nome inválido. Por favor, insira um nome sem números e com até 100 caracteres.');
            return;
        }

        if (!emailValido) {
            alert('E-mail inválido. Por favor, insira um e-mail válido.');
            return;
        }

        if (!telefoneValido) {
            alert('Telefone inválido. Por favor, insira um telefone válido no formato: XX XXXX-XXXX ou XX XXXXX-XXXX.');
            return;
        }

        // Se todas as validações passarem, você pode enviar o formulário aqui
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});