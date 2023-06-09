
//const subtrair = document.querySelector("#subtrair");
//const somar = document.querySelector("#somar");

const botoes = document.querySelectorAll("[data-item]");
botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        atualizaItem(evento.target.textContent);
        console.log(evento.target.parentNode)
    });
});

function atualizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[data-qtde]");
    if(acao==="-"){
        item.value = parseInt(item.value)-1;
    }else{
        item.value = parseInt(item.value)+1;
    }
}