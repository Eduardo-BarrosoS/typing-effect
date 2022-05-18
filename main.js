const text = [

    '1. The Power of Habit - Charles Duhigg', 
    '2. Desbloqueie o poder da sua mente - Michael Arruda',
    '3. Proteja sua emoção: Aprenda a ter a mente livre e saudável - Augusto Cury',
    '4. Inteligência Multifocal (Multifocal Intelligence) - Augusto Cury',
    '5. A teoria do Cisne Negro – Nassim Taleb',
    '6. A bola de neve – Alice Schroeder',
    '7. DECONDING SILICON VALLEY – MICHELLE MESSINA',
    '8. SEM DINHEIRO – BRUNO PERIN',
    '9. STARTUP WEEKEND – MARC NAGER',
    '10. Wuthering Heights - Emily Brontë',
    
]

const div = document.querySelector('[data-js="type"]')


let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacter = ''


const type = () => {
   

   if(messageIndex === text.length){
        messageIndex = 0
        characterIndex = 0
    }

        console.log(messageIndex === text.length)
    currentMessage = text[messageIndex]
    currentCharacter = currentMessage.slice(0, characterIndex++)
    div.textContent = currentCharacter
    console.log(currentCharacter)

     
    

    if(currentCharacter.length === currentMessage.length){
        messageIndex++
        characterIndex = 0
    }
}

setInterval(type, 150)