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

const bSomar = document.querySelector("#btnSomar");
bSomar.addEventListener("click",()=>{
    var n1=parseFloat(document.querySelector("#numero1").value);
    var n2=parseFloat(document.querySelector("#numero2").value);
    bSomar(n1,n2);

 });

 bLimpar.addEventListener("click",()=>{
    document.querySelector("#numero1").value='';
    document.querySelector("#numero2").value='';
    document.querySelector("#txtResultado").value='';
    document.querySelector("#txtPeso").focus();
});

//calculo imc

const bCalcular=document.querySelector("#btnCalcular");
const bLimpar = document.querySelector("#btnLimpar");

bCalcular.addEventListener("click",()=>{
   var p = parseFloat(document.querySelector("#txtPeso").value);
   var a = parseFloat(document.querySelector("#txtAltura").value);
   calcImc(p,a);

});

function calcImc(pP, pA){
    var imc= pP/(pA**2);
    document.querySelector("#txtResultado").value=imc;
}

    bLimpar.addEventListener("click",()=>{
        document.querySelector("#txtPeso").value='';
        document.querySelector("#txtAltura").value='';
        document.querySelector("#txtResultado").value='';
        document.querySelector("#txtPeso").focus();
    });

