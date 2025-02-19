const showUser = document.querySelector('.left_data')
const userImgChat = document.querySelector('.info_img_1')
const userNameChat = document.querySelector('.prof_name')
const userStatusChat = document.querySelector('.prof_status')
const input = document.querySelector('.input_text')
const spa = document.querySelector('.search_span')
const button = document.querySelector('button')
const getValue = document.querySelector('.text_3')
const text2 = document.querySelector('.text_2')

const menu = document.querySelector('.menu')
const menu_ic = document.querySelector('.mt_icon')
const togglediv = document.querySelector('.toggle_de')
const theme = document.querySelector('#theme')

const header1 = document.querySelector('.left_head_1')
const header2 = document.querySelector('.right_head_1')

const chat = document.querySelector('.chat')
const layout = document.querySelector('#layout')

const showUserData = async () => {
    const response = await fetch(`userData.json`)
    const data = await response.json()
    console.log(data)
    
    showUser.innerHTML = ``

    data.map(item => {
        const userDiv = document.createElement("div")
        userDiv.classList.add("left_info")
        userDiv.innerHTML = `
            <img class="image_size" src="${item.avatar}" alt="User Avatar" />
            <div class="info_left">
                <p>${item.name}</p>
                <span>Lorem, ipsum dolor sit amet consectetur...</span>            
            </div>
            <p>${item.time}</p>
        `

        // userDiv.addEventListener('click', () => {
        //     const userName = userDiv.querySelector('img').src;

        //     console.log("name : " , userName)
        // })

        userDiv.addEventListener('click', () => {
            const userName = userDiv.querySelector('.info_left p').textContent; 
             
            const userAvatar = userDiv.querySelector('img').src; 
            const userStatus = item.status

            userImgChat.src = userAvatar
            userNameChat.innerText = userName
            userStatusChat.innerText = userStatus
        });

        showUser.appendChild(userDiv)
        
    })
}

let letterCount = 0;
let wordCount = 0;

input.addEventListener('keyup', (e) => {
    let name = e.target.value

    // if(name.trim() === ""){
    //     letterCount = 0;
    //     wordCount = 0;
    // }
    
    // if(name){        
    //     letterCount++
        
    // }
    
    // if (e.key === " " || e.keyCode === 32) {
    //     wordCount++;         
    // }

    // if(e.key === 'Backspace'){
    //     letterCount--;
    // }

    // spa.innerText = `Current characters:${letterCount} and current word:${wordCount}`

    if (name.trim() === "") {
        letterCount = 0;
        wordCount = 0;
    } else {
        
        letterCount = name.length;

        wordCount = name.trim().split(/\s+/).length;
    }

    if (e.key === 'Backspace') {
        letterCount = name.length;
        if (name.trim() === "") {
            wordCount = 0;
        } else {
            wordCount = name.trim().split(/\s+/).length;
        }
    }

    if (e.key === ' ' || e.keyCode === 32) {
        
        if (name.trim().length > 0) {
            wordCount++;         
        }
    }

    spa.innerText = `Current characters: ${letterCount} and current words: ${wordCount}`;
})

let data = []
button.addEventListener('click', () => {
    let inputValue = input.value
    
    if(inputValue !== ''){
        data.push(inputValue)
        inputValue.value = ''                
    }
    const selectolor = theme.value
    console.log(selectolor)

    const newDiv = document.createElement('div')
    newDiv.classList.add('gettt')
    const newSpan = document.createElement('span')
    newSpan.innerText = inputValue; 
    newSpan.style.backgroundColor = selectolor
    newSpan.classList.add('text_2')
    
    newDiv.appendChild(newSpan)

    
    getValue.appendChild(newDiv)

    input.value = ''
    spa.innerText = `Current characters:0 and current word:0`
})


menu.addEventListener('click', () => {
    console.log("click")

    togglediv.classList.toggle('show');
})

menu_ic.addEventListener('click', () => {
    console.log("click")

    togglediv.classList.toggle('show');
})

theme.addEventListener('change', (e) => {
    const selectTheme = e.target.value

    const text4 = document.querySelector('.text22')
    

    if(selectTheme){
        header1.style.backgroundColor = selectTheme
        header2.style.backgroundColor = selectTheme
        text2.style.backgroundColor = selectTheme   
        text4.style.backgroundColor = selectTheme     
    }
})

layout.addEventListener('change', (e)=> {
    const selectLayout = e.target.value

    if(selectLayout === 'image1'){
        chat.style.backgroundImage = `url("image1.jpg")`;
    }else if(selectLayout === 'image2'){
        chat.style.backgroundImage = `url("image2.jpg")`;
    }else if(selectLayout === 'image3'){
        chat.style.backgroundImage = `url("image3.jpg")`;
    }
})



showUserData()