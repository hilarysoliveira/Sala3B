//document.querySelector('#btnSomar').addEventListener("click",somarValores);
//
//function somarValores(){
//    var n1=parseFloat(document.querySelector("#numero1").value);
//    var n2=parseFloat(document.querySelector("#numero2").value);
//
//    var soma=n1+n2;
//    document.querySelector('#Resultado').value = soma;

//document.querySelector("#btnSomar").addEventListener("click",function
//(){
//    var n1=parseFloat(document.querySelector("#numero1").value);
//    var n2=parseFloat(document.querySelector("#numero2").value);
//    var soma= n1+n2;
//    document.querySelector('#Resultado').value = soma;
//
//});

//calculo somar
// const bSomar = document.querySelector("#btnSomar");
// bSomar.addEventListener("click",()=>{
//     var n1=parseFloat(document.querySelector("#numero1").value);
//     var n2=parseFloat(document.querySelector("#numero2").value);
//     bSomar(n1,n2);

// });

//calculo imc

document.querySelector("#btnImc").addEventListener("click",function
(){
    var n1=parseFloat(document.querySelector("#numero1").value);
    var n2=parseFloat(document.querySelector("#numero2").value);
    var imc= n1/n2**2;
    document.querySelector('#Imc').value = imc;

});

