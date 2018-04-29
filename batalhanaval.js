var posicaoAleatoria = 1 + Math.floor(Math.random() * 7); // Define a a vaiável posicaoAleatoria como um número natural ente um e sete, sendo esta a razão pela qual está escrito "Math.random() * 7", que define o intervalo [0, 7[, sendo depois arredondado, e transformado assim num número natural, ao qual é somado uma unidade

var parte1 = posicaoAleatoria; // Define a variável parte 1 como a posição aleatória, sendo as outras variáveis parte 2 e parte 3 dependentes dela
var parte2 = parte1 + 1;
var parte3 = parte2 + 1;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) { // Este loop while continua a ser executado até que a variável foiAfundado tenha valor lógico de verdade

    jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 10:"); // Abre uma caixa no browser com um espaço para introduzir texto

    if (jogada < 1 || jogada > 10) { // Impede que seja colocado um número menor do que um ou maior do que 10

        alert("Jogada inválida. Tenta de novo!"); // Se for colocado um número inválido aparece numa caixa no browser a mensagem "Jogada inválida. Tenta de novo!"

    } else { // Se a jogada realizada for válida, o código a seguir é executado

        totalJogadas = totalJogadas + 1; // Soma uma unidade ao valor da variável totalJogadas, que nos indica o número de jogadas

        if (jogada == parte1 || jogada == parte2 || jogada == parte3) { // Se o jogador introduzir um dos valores das variáveis partes, o código a seguir é executado

            alert("Acertaste em mais uma parte!"); // Cria uma caixa no browser a mensagem "Acertaste em mais uma parte!"

            atingidas = atingidas + 1; // Soma uma unidade à variavel atingidas

            if (atingidas == 3) { // Se o valor da variável atingidas for três, é executado o código a seguir

                foiAfundado = true; // Define a variável foiAfundado como tendo valor lógico positivo, parando o loop while

                alert("Navio totalmente afundado! A tua precisão é de  " + Math.floor( 300 / totalJogadas) + "  %"); // O jogador é alertado com a mensagem numa caixa do browser "Navio totalmente afundado!", e é informado sobre a sua precisão
                
            }

        } else { // Se o jogador não tiver, na sua jogada, acertado em nenhum dos valores das variáveis partes, então é alertado com a mensagem, numa caixa do browser, "Falhaste..."

            alert("Falhaste...");

        }

    }

}
