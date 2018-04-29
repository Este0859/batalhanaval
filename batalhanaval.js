var posicaoAleatoria = 1 + Math.floor(Math.random() * 5); // Define a a vaiável posicaoAleatoria como um número natural ente um e cinco, sendo esta a razão pela qul está escrito 
var parte1 = posicaoAleatoria;
var parte2 = parte1+1;
var parte3 = parte2 +1;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 8:");

   if (jogada < 1 || jogada > 8) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}
