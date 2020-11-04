/* botao = evento click */
/* function xxx() {
    corpo da função - comando js
}
arrow functions: 
() => {

}
*/
document.querySelector('#botao').addEventListener('keydown', () => {
    /* o js vai pegar o nome digitado e armazenar numa variavel de memoria
    variavel de memoria - porção da memoria ram */

    let nome; /* declaração da variável de memória nome */
    nome = document.getElementById('nome').value;/* atribuindo o nome digitado
    para a variavel nome */
    let sobrenome=document.getElementById('sobrenome').value;
    /* imprimir: o nome digitado e: 'NOME' */
    /* JUNTAR = CONCATENAR + */
    document.write('O nome digitado é '+nome+' '+sobrenome);
})

    /* criar um evento para escutar o batao */
    document.querySelector('#botao').addEventListener('click', ()=>{
    /* corpo da função */
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;

    /* cubo rosa = metodo -> vai fazer alguma ação */
    alert('O nome digitado é '+nome+' '+sobrenome)
    
})