var box1 = document.getElementById('box-filho-2');
var box2 = document.getElementById('box-filho-escondido');

var textoExibido = document.getElementById('p-crip-descrip');

function criptografar() {
    var texto = document.getElementById('texto').value;

    if(texto != ''){
        let textoCriptografado = '';

        const substituir = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        if(!/^[a-z\s]*$/.test(texto)){
            alert('O texto deve conter apenas letras minúsculas e sem acento.')
            limparCampo();
            return;
        }else{
            for (let i = 0; i < texto.length; i++) {
                let char = texto[i];
                if (substituir[char]) {
                    textoCriptografado += substituir[char];
                } else {
                    textoCriptografado += char;
                }
            }
        }

        //console.log(textoCriptografado);
        
        box1.style.display = 'none';
        box2.style.display = 'block';

        textoExibido.innerText = textoCriptografado;

        }else{
            alert('Deve conter um texto para ser criptografado.');
            return;
        }
}

function descriptografar(){
    let texto = document.getElementById('texto').value;

    if(texto != ''){

        const substituir = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        for (let chave in substituir) {
            let regex = new RegExp(chave, 'g');
            texto = texto.replace(regex, substituir[chave]);
        }

        box1.style.display = 'none';
        box2.style.display = 'block';

        //console.log(texto);
        textoExibido.innerText = texto;

    } else {
        alert('Deve conter um texto para ser descriptografado.');
        return;
    }
}

function copiar(){
     let resultado = textoExibido.innerText;
            navigator.clipboard.writeText(resultado).then(() => {
                alert('Texto copiado para a área de transferência.');
            }).catch(err => {
                alert('Falha ao copiar o texto.');
            });
}

function limparCampo(){
    let texto = document.getElementById('texto');
    texto.value = '';
}