let btn = document.getElementById('add')
let container = document.querySelector('.notes')
let note = document.querySelector('.noteLink')
let textArea = document.getElementById('input')



for (let key in localStorage) {
    if (key === 'key' || key ==='getItem' || key === 'clear' || key === 'setItem' || key === 'removeItem' || key === 'length') {
        // pass
    } else {
        createNote(localStorage[key], key)
    }
    
}



function createNote(noteText, header) {
    let linkToNote = document.createElement('p')
    linkToNote.id = header
    linkToNote.className = 'noteLink'
    
    localStorage.setItem(header, noteText)
    linkToNote.textContent = header
    container.appendChild(linkToNote)
}

function createNoteWindow(nodeText, header) {
    let div = document.createElement("div");
    div.id = 'note'
    let head = document.createElement('span')
    head.id = 'header'
    head.textContent = header
    let close = document.createElement('span')
    close.id = 'close'
    close.textContent = 'X'
    let text = document.createElement('p')
    text.textContent = nodeText
    text.innerHTML = text.innerHTML.replace(/\n/g, '<br>\n');  
    close.addEventListener('click', () => {
        div.style.opacity = '0'
        close.style.opacity = '0'
        setTimeout(() => div.remove(), 250)
        setTimeout(() => close.remove(), 250)
    })
    div.appendChild(head)
    div.appendChild(close)
    div.appendChild(text)
    document.body.appendChild(div)
    div.animate([
        // keyframes
        { opacity: '0' },
        { opacity: '1' }
    ], {
        // timing options
        duration: 250,
    });
}

btn.addEventListener('click', () => {
    let textToParse = textArea.value;
    let symbolIdx = 0
    while (true) {
        symbolIdx = textToParse.indexOf("\n")
        if (symbolIdx === -1) {
            symbolIdx = textToParse.length
            break
        }
        break
    }
    let header = textToParse.substring(0, symbolIdx)
    textToParse.replace(/\n/g, '<br>\n');
    console.log(textToParse)
    createNote(textToParse, header)

})

container.addEventListener('click', (event) => {
    let note = localStorage.getItem(event.target.id)
    createNoteWindow(note, event.target.id)
})
