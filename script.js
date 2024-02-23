function arabicToRoman(num) {
    const romanMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let item in romanMap) {
        while (num >= romanMap[item]) {
            roman += item;
            num -= romanMap[item];
        }
    }

    return roman;
}

// Função principal para lidar com a conversão e atualização da interface
function convertToRoman() {
    const inputNumber = document.getElementById('number').value;
    const outputElement = document.getElementById('output');

    // Verificar se o número inserido é válido
    if (inputNumber === "") {
        outputElement.textContent = 'Por favor, insira um número.';
    } else if (inputNumber > 3999){
        outputElement.textContent = 'Por favor, insira um número igual ou inferior a 3999.';
    } else if (inputNumber < 1){
        outputElement.textContent = 'Por favor, insira um número igual ou superior a 1.';
    } else {
        const romanNumeral = arabicToRoman(parseInt(inputNumber));
        outputElement.textContent = romanNumeral;
    }
}

// Adicionando um evento de clique ao botão de conversão
document.getElementById('convert-btn').addEventListener('click', convertToRoman);