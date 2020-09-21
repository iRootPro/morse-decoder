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
    let letters = expr.match(/.{1,10}/g)
    let resultString =''
    let result = ''
    letters.forEach(letter => {
        let morse = letter.match(/.{1,2}/g)
        morse.forEach(item => {
            if (item === '10') result +='.'
            if (item === '11') result +='-'
            if (item === '**') result +=' '
        })
        if (result === '     ') {
            resultString += ' '
            result = ''
        }
        else {
            resultString += MORSE_TABLE[result]
            result = ''
        }

    })
return  resultString

}

module.exports = {
    decode
}