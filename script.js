
function sendWhats(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const telefone = '5585986746323';

    const texto = `Olá! Me chamo ${name}, ${message}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url)

    window.open(url, '_blank');
}