#Conversor de numeral arábico para romano - HTML/CSS/JavaScript

Este é um dos primeiros projetos que desenvolvi durante meus estudos de Javascript, apresentando duas funções principais:
A primeira recebe um número inteiro como entrada e retorna sua representação em algarismos romanos. 
Ele faz isso usando um mapa que associa algarismos romanos a seus equivalentes em números arábicos. 
Em seguida, ele itera sobre esse mapa, subtraindo os valores correspondentes do número de entrada até que não seja possível subtrair mais nada, construindo assim a representação em algarismos romanos.
A segunda, por sua vez, é chamada quando o botão de conversão é clicado. 
Ela obtém o número inserido pelo usuário a partir de um elemento HTML com o id 'number', verifica se é um número válido (entre 1 e 3999), chama a função arabicToRoman para converter o número para algarismos romanos e exibe o resultado em um elemento HTML com o id 'output'.

![image](https://github.com/pedroAugtIn/ConversorRomano/assets/158518938/3eadb913-6d4e-438a-8006-79af361bbfbc)
