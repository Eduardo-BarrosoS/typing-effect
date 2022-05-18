const textsToEnter = [

    'O serviço gratuito do Google traduz instantaneamente palavras', 
    'frases e páginas da Web entre o inglês e mais de 100 outros idiomas'

]

const div = document.querySelector('.digitation')

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacter = ''

const type = () => {
    if(messageIndex === div.length){
        messageIndex = 0
    }
    
    currentMessage = textsToEnter[messageIndex]
    currentCharacter = currentMessage.slice(0, characterIndex++)
    div.textContent = currentCharacter
    console.log(currentCharacter.length)

    if(currentCharacter.length === currentMessage.length){
        messageIndex++
        currentCharacter = 0
    }
}

setInterval(type, 200)