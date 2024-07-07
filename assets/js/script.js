const areaTexto = document.querySelector('#area__texto');
const imagem = document.querySelector('#imagem');
const visualizarTexto = document.querySelector('.visualizacao__texto');
const titulo = document.querySelector('.titulo');
const subtitulo = document.querySelector('.subtitulo');
const copiarBtn = document.querySelector('.copiar__btn');
const aviso = document.querySelector('.aviso__texto');

const criptoMap = {
    'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v',
    'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
    'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l',
    'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
    'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b',
    'z': 'a'
};

function criptografar() {
    let texto = areaTexto.value.toLowerCase();
    let textoCriptografado = '';

    for (let letra of texto) {
        if (criptoMap[letra]) {
            textoCriptografado += criptoMap[letra];
        } else {
            textoCriptografado += letra;
        }
    }

    if(texto != "") {
        imagem.style.display = "none";
        titulo.style.display = "none";
        subtitulo.style.display = "none";

        visualizarTexto.innerHTML = textoCriptografado;

        visualizarTexto.style.display = "block";
        copiarBtn.style.display = "block";

        limparAreaTexto();
    }
}

function descriptografar() {
    let texto = areaTexto.value.toLowerCase();
    let textoCriptografado = visualizarTexto.innerText.toLowerCase(); 
    let textoDescriptografado = '';

    for (let letra of textoCriptografado) {
        if (criptoMap[letra]) {
            textoDescriptografado += criptoMap[letra];
        } else {
            textoDescriptografado += letra;
        }
    }

    if(texto != "") {
        imagem.style.display = "none";
        titulo.style.display = "none";
        subtitulo.style.display = "none";

        visualizarTexto.innerHTML = textoDescriptografado;

        visualizarTexto.style.display = "block";
        copiarBtn.style.display = "block";

        limparAreaTexto();
    }
}

function limparAreaTexto() {
    areaTexto.value = '';
}

function copiar() {
    if(visualizarTexto != '') {
        imagem.style.display = "block";
        titulo.style.display = "block";
        subtitulo.style.display = "block";
        visualizarTexto.style.display = "none";
        copiarBtn.style.display = "none";
    }

    const texto = visualizarTexto.innerText;

    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado para a área de transferência');
        mostrarAviso('Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarAviso('Erro ao copiar texto.');
    });
}

function mostrarAviso(msg) {
    aviso.innerText = msg;
    aviso.style.display = 'flex';

    setTimeout(() => {
        aviso.style.display = 'none';
    }, 2000);
}