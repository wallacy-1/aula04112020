document.querySelector("#btnpar").addEventListener("click", ()=>{
//arrow function
let num = parseInt(document.getElementById("num").value);
let resto;
resto = num%2;
if (resto==0) {
    alert("O número "+num+" e par!");
} else {
    alert("O número "+num+" e impar!");
}

})

document.querySelector("#btnano").addEventListener("click", ()=>{
let ano = parseInt(document.getElementById("ano").value);
let resto;
resto = ano%4;
if (resto==0) {
    alert("E bissexto!")
} else {
    alert("Não é bissexto!")
}
})