console.log('Hello, world!');

const textbox = document.getElementById('text');
const btn = document.getElementById('btn');

const hexColors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

btn.addEventListener('click', () => {
    let currentHex = '#';

    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16);
        currentHex += hexColors[index];
    }

    textbox.innerText = currentHex;

    document.body.style.backgroundColor = currentHex;
});
