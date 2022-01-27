const tx = document.getElementsByTagName("textarea");
const btn = document.querySelector('.button')
const allNotes = document.querySelector('.Notes')
allNotes.addEventListener('click', (e) => {

})

for (const [key, value] of Object.entries(localStorage)) {
  createNote(key, value)
}


for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

const btns = document.querySelectorAll(".main-header span");
const container = document.querySelector('.overflow')
for (const btn of btns) {
    btn.addEventListener('click', (e) => {
        let current = document.getElementById('current')
        let next = document.querySelector('.' + e.target.textContent)
        let clientHeight = document.querySelector('.container').clientHeight
        container.style = 'height:' + clientHeight.toString() + 'px;' + 'opacity: 1'
        setTimeout(() => {
          container.style = 'height:' + clientHeight.toString() + 'px;' + 'opacity: 0'
          current.style.display = 'none'
          current.id = ''
          next.style.display = '';
          next.id = 'current'
          
          setTimeout(() => container.style = '', 150)
          
        }, 300)
      })
}


btn.addEventListener('click', () => {
  let textToParse = tx[0].value;
  let symbolIdx = 0
  while (true) {
    symbolIdx = textToParse.indexOf("\n")
    if (symbolIdx === -1) {
        symbolIdx = textToParse.length
      }
     break
    }
    let header = textToParse.substring(0, symbolIdx)
    createNote(header, textToParse.replace(/\n/g, '<br>\n'))
})

function createNote(headerText, noteText) {
  
  localStorage.setItem(headerText, noteText)
  let note = document.createElement('div')
  note.className = 'note'
  let noteHeader = document.createElement('div')
  noteHeader.className = 'note-header'
  let header = document.createElement('h1')
  header.textContent = headerText
  noteHeader.appendChild(header)
  let noteContent = document.createElement('div')
  noteContent.className = 'note-content'
  noteContent.innerHTML = noteText
  note.appendChild(noteHeader)
  note.appendChild(noteContent)
  allNotes.appendChild(note)
}