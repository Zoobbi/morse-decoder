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
    let symbols = [];
    let result = [];
    let [i,j] = [0,1];
    while (i < expr.length) {
        let curSymbol ='';
        symbols =(expr.slice(i,(+(j+'0'))));
        for (let i = 0; i <= 10; i = i + 2) {
            if(symbols[i] === '*') {
                curSymbol = ` `;
                break;
            }
            if(symbols[i] + symbols[i+1] === '00') {
                curSymbol += '';
                continue;
            }
            if(symbols[i] + symbols[i+1] === '10') {
                curSymbol += '.';
                continue;
            }
            if(symbols[i] + symbols[i+1] === '11') {
                curSymbol += '-';
                continue;
            }
        }
        curSymbol === ` ` ? result.push(` `) : result.push(MORSE_TABLE[curSymbol]);
        i = i+10;
        j++;
    }
    return result.join('');
}

module.exports = {
    decode
}