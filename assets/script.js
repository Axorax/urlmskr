const input = document.querySelector('.input');
const maskButton = document.querySelector('.mask-button');
const copy = document.querySelector('.copy');
const output = document.querySelector('.output');
const modeText = document.querySelector('.mode-button p');
let currentMode = 'redirect';
let str = '';

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        encode(input.value);
    }
});

maskButton.addEventListener('click', () => {
    encode(input.value);
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.innerText);
    copy.innerText=`✅ Copied Masked URL`;
    setTimeout(() => {
        copy.innerText='🔗 Copy Masked URL';
    }, 2000);
})

function modeChange() {
    if (currentMode == 'redirect') {
        modeChangeAnim('text');
    } else {
        modeChangeAnim('redirect')
    }
}

function modeChangeAnim(mode) {
    modeText.style.transform='translate(-150%, 0)';
    setTimeout(() => {
        modeText.innerText = `Mode: ${mode}`;
        currentMode = mode;
        modeText.style.transform='translate(0, 0)';
    }, 350)
}

function encode(value) {
    if (value == '') {
        output.innerText = `Input cannot be empty. Type something properly.`;
    } else {
        let encodedValue = window.btoa(value);
        if (currentMode == 'redirect') {
            output.innerText=`https://axorax.github.io/urlmskr/${encodedValue}`
        } else if (currentMode == 'text') {
            output.innerText=`https://axorax.github.io/urlmskr/?t=${encodedValue}`    
        }
    }
};

// window.btoa();
// window.atob();