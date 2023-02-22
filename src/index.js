const MORSE_TABLE = {
    '**********': ' ',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',

};

function decode(expr) {
    const lettersArr = [];
    let str = '';

    for (let i = 0; i < expr.length; i++) {
        str += expr[i];
        if (str.length === 10) {
            lettersArr.push(str);
            str = '';
        }
    }

    const morseLettersArr = [];
    lettersArr.map(el => {
        el = el.replace(/10/g, '.');
        el = el.replace(/11/g, '-');
        el = el.replace(/0/g, '');

        morseLettersArr.push(el)
    });

    let result = '';
    morseLettersArr.forEach(el => {
        result += MORSE_TABLE[el]
    })
    return result;
}

module.exports = {
    decode
}