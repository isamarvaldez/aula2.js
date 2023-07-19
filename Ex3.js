//Faca um programa que imprima os numeros impares de 0 a 50;
// for(inicializacao; condicao; contador += 2)
// for(inicializacao; condicao; contador = contador + 2)

const PromptSync = require('prompt-sync')

//for (let contador = 1; contador <=100; contador += 2){
 //   console.log(contador)
//}
//for (let contador = 0; contador <=50; contador += 1) {
 //   console.log(contador)
//}
//Imprimir números pares de 1 a 10.
//for (let contador = 2; contador <=10; contador +=2){
 //   console.log(contador)
    
//}
//Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.
//let prompt = require("prompt-sync")();
//let numeroEscolido = parseInt(prompt('Digite um numero: '))
//for (let i = 0; i <=10; i +=1){
 //   console.log(`{${i} x ${numeroEscolido} ${i*1}`)
//}
//Imprimir os primeiros 10 números da sequência de Fibonacci.
//let anterior = 0
//let atual = 1

//console.log(anterior)
//console.log(atual
    
  //  )
//let proximoNumero = numeroAnterior + numeroAtual
//let numeroAnterior = numeroAtual + proximoNumero

//for (let contador = 3; contador <= 10; contador++) {
   // let novo = anterior + atual

      //  console.log(novo)

      //  anterior = atual
      //  atual = novo
//}
//Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.

//let contador = 0;
//let soma = 0;

//while( contador <= 100) {


   // soma = soma + contador;
   // console.log(soma)
   // contador++
   // //soma += contador

//}
//Faça um programa que receba a idade do usuário, enquanto a
//resposta do usuário for menor que 18 anos continue a solicitar a
//idade e mostre uma mensagem quando a idade do usuário for
//maior que 18.

//let prompt = require ('prompt-sync')()
//let numero = parseInt(prompt("Digite sua idade: "))

//while(numero < 18) {
   // numero = parseInt(prompt('Digite sua idade')) 
     

//}
 //console.log('voce ja atingiu a mioridade')



//Imprimir números pares de 0 a 20 utilizando o loop while
//let contador = 0;

//while ( contador <= 20){
  // console.log(contador)
   // contador += 2
//}
//
//otra forma:
//while (contador <= 20) {
  //  if (contador % 2 == 0) {
    //    console.log(contador)
   //}
   //contador++
//}
   // otra forma de hacer:
   
  // Faça um programa que receba um número do usuário e mostre
  // no console a contagem regressiva até 0.
  let prompt = require('prompt-sync')()

  let numero = parseInt(prompt("Digite un numero: "));
  while (numero >= 0){

    console.log(numero);
    numero--;
  }