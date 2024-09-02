// Exibir o modal de cadastro ao clicar no botão "Cadastre-se"
document.getElementById('btnCadastro').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('btnCadastroBot').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('assinar1').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('assinar2').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('assinar3').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const nome = document.getElementById('nome').value;
    const niver = document.getElementById('niver').value;
    const gen = document.getElementById('gen').value;
    const email = document.getElementById('email').value;
    const confirmacaoIdade = document.getElementById('confirmacaoIdade').checked;

    if (!confirmacaoIdade) {
        alert('Você precisa confirmar que é maior de 18 anos para continuar.');
        return;
    }

    document.getElementById('obrigado').classList.remove('hidden');
    
    document.getElementById('form').reset();
    
    console.log('Lead Capturado:', { nome, niver, gen, email });
    
    const whatsappMsg = `Olá, meu nome é ${nome}. Poderia me informar mais sobre o streaming SportFlix?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=00000000&text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');
});
