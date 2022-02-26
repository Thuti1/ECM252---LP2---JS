// AULA 1

// //declarando constantes
// const nome = "Jose";
// const idade = 27;
// // aspas simples e duplas têm o mesmo efeito
// const sexo = "M";
// const endereco = 'Rua K, 12'
// //declarando variáveis
// //let: variável local com escopo de bloco
// let a = 2;
// let b = "abc";
// //var: seu escopo é a função em que foi declarada ou global
//  var c = 2 + 3;
// var d = "abcd"
// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);
// //nome pode ser redeclarada
// var linguagem = "Java";
// console.log("Aprendendo, " + linguagem);
// //escopo não restrito a bloco
// var idade = 18;
// //exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
// //Ela é içada - do inglês hoist - para fora do bloco if
// console.log(`Oi, ${nome}`);
// if (idade >= 18) {
// var nome = "João";
// console.log(`Parabéns, ${nome}. Você pode dirigir`);
// }
// //ainda existe aqui
//  console.log(`Até mais, ${nome}.`);$
// const n1 = 2;
// const n2 = '3';
// //coerção implícita de n1, concatenação acontece
// const n3 = n1 + n2;
// console.log(n3);
// //coeração explícita, soma acontece
// const n4 = n1 + Number (n2)
// console.log(n4)
// console.log(1 == 1)//true
// console.log (1 == "1") //true
// console.log (1 === 1) //true
// console.log (1 === "1")//false
// console.log (true == 1) //true
// console.log (1 == [1])//true
// console.log (null == null)//true
// console.log (null == undefined)//true
// console.log([] == false)//true
// console.log ([] == [])//false
// //declaração
// v1 = [];
// //podemos acessar qualquer posição, começando de zero
// v1[0] = 3.4;
// v1[10] = 2;
// v1[2] = "abc"
// //aqui, v1 tem comprimento igual a 11
// console.log(v1.length)
// //inicializando na declaração
// v2 = [2, "abc", true]
// console.log(v2)
// //iterando
// for (let i = 0; i < v2.length; i++){
// console.log(v2[i])
// }
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
// "Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA);
// const res = nomes.map((nome) => nome.charAt(0));
// console.log(res);
// const todosComecamComA = nomes.every((n) => n.startsWith("A"));
// console.log(todosComecamComA);
// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);
// console.log(soma);
// function hello (){
//     console.log ('Oi')
//     }
// hello()
// //cuidado, aqui redefinimos a função sem parâmetros
// function hello (nome){
//     console.log ('Hello, ' + nome)
// }
// hello('Pedro')
// function soma (a, b) {
//     return a + b;
//     }
// const res = soma (2, 3)
// console.log (res)

//Completar aula 1

// AULA 2 ----------------------

// let pessoa = {
//     nome: 'João',
//     idade: 22
// };

// console.log(pessoa);
// console.log("Me chamo" + pessoa.nome);
// console.log("Tenho " + pessoa.idade + " anos de idade");

// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121
//     },
// }
// console.log(
//     `Sou ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade}, e moro na rua ${pessoaComEndereco.endereco['logradouro']}`);

// let concessionaria = {
//     cnpj: "00011122210000-45",
//     endereco: {
//         logradouro: "Rua A",
//         numero: 10,
//         bairro: "Vila J"
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo:"EcoSport",
//             anoDeFabricacao: 2010
//         },
//         {
//             marca: "Chevrolet",
//             modelo:"Onix",
//             anoDeFabricacao: 2020
//         },
//         {
//             marca: "Volks",
//             modelo:"Nivus",
//             anoDeFabricacao: 2018
//         },
//     ],
// };
// console.log("----------Carros----------");
// for (let veiculo of concessionaria.veiculos){
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano: ${veiculo.anoDeFabricacao}`);
//     console.log("------------------------------");
// };

// let calculadora = {
//     soma: (a,b) => a + b,
//     subt: function (a,b){
//         return a - b;
//     }
// };

// console.log(`2 + 3 = ${calculadora.soma(2,3)}`);
// console.log(`2 - 3 = ${calculadora.subt(2,3)}`);

// console.log('Eu primeiro')
// console.log("Agora eu")
// console.log("Sempre vou ser a última...:(")


// const a = 2 + 7;
// const b = 5;
// // Só faz sentido se os valores a e b já estiverem disponíveis
// console.log(a + b);

// Síncrono ou Bloqueante
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 200;
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4;
//     return d;
//     };
// const a = 2 + 3;
// const b = 5 + 9;
// const d = demorada();
// /*
// o valor de e não depende do valor devolvido
// pela função demorada.
// */
// const e = 2 + a + b
// console.log(e)    

// Assíncrono ou Não Bloqueante
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //função será executada depois de, pelo menos, 500 milissegundos
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)
// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = a + b
// console.log(e)

// function demorada(tempo){
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// };

// setTimeout(function() {demorada(2000)}, 1000);
// setTimeout(function() {demorada(1000)}, 2000);
// console.log("Chegou ao fim do script principal");

// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// //crie um arquivo chamado arquivo.txt com o conteúdo ``2'' (sem as aspas)
// //no mesmo diretório em que se encontra seu script
// abrirArquivo("arquivo.txt");

// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//             const dobro = +conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// abrirArquivo("arquivo.txt");

// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject){
//         let res = 0;
//         for (let i=1; i <= numero; i++){
//             res += i;
//         }
//         resolve(res);
//     });
// }
// calculoDemorado(10).then((resultado) => {
//     console.log(resultado);
// });

// function calculoRapidinho(numero) {
//     return Promise.resolve((numero * (numero + 1)) / 2)
// }
// calculoRapidinho(10).then((resultado) => {
//     console.log(resultado);
// });

// function calculoRapidinho2(numero) {
//     return numero >= 0 
//     ? Promise.resolve((numero * (numero + 1)) / 2)
//     : Promise.reject("Somente valores nulos ou positivos, por favor");
// }

// calculoRapidinho2(10).
//     then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// calculoRapidinho2(-1).
//     then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// console.log("Esperando...");

// Pegar uma key de API no site: https://openweathermap.org/forecast5
// + npm install axios

// const axios = require("axios");
// //sua chave aqui
// const appid = "sua_chave_aqui";
// //cidade desejada
// const q = "Itu";
// //unidade de medida de temperatura
// const units = "metric";
// //idioma
// const lang = "pt_BR";
// //quantidade de resultados
// const cnt = "10"
// const url = `https://api.openweathermap.org/data/2.5/fore c
//     cast?q=${q}&units=${units}&appid=${appid}&lang=${lang c
//     }&cnt=${cnt}`;$