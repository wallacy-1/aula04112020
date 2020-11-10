document.querySelector("#btn").addEventListener('click', () =>{
    let n1,n2,total,total2,total3,total4;
    n1 = parseInt(document.getElementById("n1").value); /* com parseint 1 sem parseint '1' */
    n2 = parseInt(document.getElementById("n2").value);
    /* toda as vezes que a informação vier de um input ela vem como se fosse uma strin '1' */

    total = n1+n2;
    total2 = n1-n2;
    total3 = n1*n2;
    if (n2!=0) {
        total4 = n1/n2
        alert('Resultado: '+"\r\n"+
            "soma :"+total+"\r\n"+
            "subtração :"+total2+"\r\n"+
            "multiplicação :"+total3+"\r\n"+
            "divisão :"+total4);
    } else {
        alert("Resultado: "+"\r\n"+
            "soma :"+total+"\r\n"+
            "subtração :"+total2+"\r\n"+
            "multiplicação :"+total3+"\r\n"+
            "Não posso dividir por 0");
    }
        /* nan - not a number = nao e um numero */
    /* acrecentar os calculos de subtração n1 - n2, multiplicação n1*N2 e divisao
    porem tome cuidado pois o usuario pode digitar 0 e eu não posso dividir por 0.
    n1/n2 se n2>0
    mostrar os resuldatados no mesmo alert, somente quebrando a linha */
})