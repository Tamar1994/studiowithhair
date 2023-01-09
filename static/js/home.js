function funcoes(){
    imagem()

    setTimeout(() => {
        textos("texto1")
    }, 3000)
    
}

function imagem(){
    
    elementoImagem = document.getElementById("img_topo_site");

    elementoImagem.classList.remove('loading_img');
    elementoImagem.classList.add('img_loaded');

    setTimeout(() => {
        elementoImagem.classList.remove('img_loaded');
        elementoImagem.classList.add('loading_img');

    }, 10000)

    setTimeout(() => {
        imagem();
    }, 20000)

}

function textos(texto){

    elementoTexto = document.getElementById(texto)

    elementoTexto.classList.remove("div_texto")
    elementoTexto.classList.add("div_texto_visible")

    setTimeout(() => {

        elementoTexto.classList.remove("div_texto_visible")
        elementoTexto.classList.add("div_texto")
 
    }, 8000)

    setTimeout(() => {
        if(texto == 'texto1') {
            novo = "texto2"
            textos(novo)
        } else if(texto == 'texto2') {
            novo = "texto3"
            textos(novo)
        } else if(texto == 'texto3') {
            novo = "texto1"
            textos(novo)
        }
    }, 12000)

}

function abrirMenu(){

    elementoMenu = document.getElementById("nav_topo_recursivo");

    size = elementoMenu.style.left

    if(size!="0px") {
        elementoMenu.style.left = "0px";
    } else {
        elementoMenu.style.left = "-150px"
    }

}