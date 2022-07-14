const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code = [];
    const simvolToCode = {
        '10': '.',
        '11': '-',
        '**': ' '
    };

    let codeOne = '';
    let codeNormal = '';
    let myIndex = 0;


    for (let i = 0; i < expr.length; i = i + 10) {
        codeOne = expr.substr(i, 10);
        codeOne[0] === '*' ? codeNormal = '**' : codeNormal = codeOne.slice(codeOne.indexOf('1'));

        if (codeNormal.length === 2) {
            code[myIndex] = simvolToCode[codeNormal];
        } else {
            let layout = '';

            for (let j = 0; j < codeNormal.length; j = j + 2) {
                layout = layout + simvolToCode[codeNormal[j] + codeNormal[j + 1]];
            }
            code[myIndex] = layout;
        }
        myIndex++;
    }

    let text = code.map((value, index) => {
        if (code[index] === ' ') {
            return ' ';
        } else {
            return MORSE_TABLE[code[index]];
        }
    });



    return text.join('');
}

module.exports = {
    decode
}