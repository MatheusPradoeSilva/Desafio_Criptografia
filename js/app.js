function remover_item(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function copiar(){
    let texto_criptografado = document.getElementById('nenhuma_mensagem').innerText;

    let textarea = document.createElement('textarea');
            textarea.textContent = texto_criptografado;
            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand('copy');

            document.body.removeChild(textarea);

    remover_item('botao_copiar', 'Copiado');
}

function criptografar(){
    let texto_criptografar = document.getElementById('texto_criptografar').value;

        let texto_criptografado = '';

        for(i = 0; i < texto_criptografar.length; i++) {

            if (texto_criptografar[i] === 'a') {
                texto_criptografado += 'ai';
            } else if(texto_criptografar[i] === 'e'){
            texto_criptografado += 'enter';
             } else if(texto_criptografar[i] === 'i'){
                texto_criptografado += 'imes';
             } else if(texto_criptografar[i] === 'o'){
                texto_criptografado += 'ober';
            } else if(texto_criptografar[i] === 'u'){
                    texto_criptografado += 'ufat';
            } else {
                texto_criptografado += texto_criptografar[i];
             }
            }
            
            let letrasMaiusculas = texto_criptografado.match(/[A-Z]/g);
            let acento = texto_criptografado.match(/[á-ú]/g);

            if(letrasMaiusculas){
                remover_item('nenhuma_mensagem', 'Há letras maiúsculas no seu texto!');
            } else if (acento){
                remover_item('nenhuma_mensagem', 'O seu texto contem acentuação');
            }else {

                remover_item('texto_deseja', '');
                remover_item('nenhuma_mensagem', texto_criptografado);
                remover_item('botao_copiar', 'Copiar');
                let img = document.getElementById('codigo_imagem');
                    img.parentNode.removeChild(img);
            }
           
}

function descriptografar(){

   let texto_criptografado = document.getElementById('texto_criptografar').value;
    let texto_descriptografado = '';

    for(let i = 0; i < texto_criptografado.length; i++) {
        if (texto_criptografado.substring(i, i + 2) === 'ai') {
            texto_descriptografado += 'a';
            i++;
        } else if(texto_criptografado.substring(i, i + 5) === 'enter') {
            texto_descriptografado += 'e';
            i += 4;
        } else if(texto_criptografado.substring(i, i + 4) === 'imes') {
            texto_descriptografado += 'i';
            i += 3;
        } else if(texto_criptografado.substring(i, i + 4) === 'ober') {
            texto_descriptografado += 'o';
            i += 3;
        } else if(texto_criptografado.substring(i, i + 4) === 'ufat') {
            texto_descriptografado += 'u';
            i += 3;
        } else {
            texto_descriptografado += texto_criptografado[i];
        }
    }
    let letrasMaiusculas = texto_criptografado.match(/[A-Z]/g);
    let acento = texto_criptografado.match(/[á-ú]/g);

    if(letrasMaiusculas){
        remover_item('nenhuma_mensagem', 'Há letras maiúsculas no seu texto!');
    } else if (acento){
        remover_item('nenhuma_mensagem', 'O seu texto contem acentuação!');
    }else {

      remover_item('texto_deseja', '');
    remover_item('nenhuma_mensagem', texto_descriptografado);
    remover_item('botao_copiar', 'Copiar');
    let img = document.getElementById('codigo_imagem');
        img.parentNode.removeChild(img);      

        console.log(texto_descriptografado);
        console.log(texto_criptografado);
        console.log(i);
    }
}