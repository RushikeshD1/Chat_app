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

const userData = 
[
    {
      "avatar":
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
      "name": "John Mayers",
      "time": "3 min ago",
      "status": "Accountant"
    },
    {
      "avatar":
        "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
      "name": "Tony Stark",
      "time": "10 min ago",
      "status": "Genius, Billionaire, Playboy, Philanthropist"
    },
    {
      "avatar":
        "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
      "name": "S. Johansson",
      "time": "3 hours ago",
      "status": "Black Widow"
    },
    {
      "avatar":
        "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
      "name": "Jeremy Renner",
      "time": "4 hours ago",
      "status": "Hawkeye"
    },
    {
      "avatar": "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
      "name": "Anthony Mackie",
      "time": "8 hours ago",
      "status": "Falcon"
    },
    {
      "avatar":
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
      "name": "Chris Evans",
      "time": "22 hours ago",
      "status": "Captain America"
    },
    {
      "avatar":
        "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
      "name": "Chris Hemswoth",
      "time": "1 day ago",
      "status": "Thor the god of thunder"
    },
    {
      "avatar": "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
      "name": "Mark Ruffalo",
      "time": "Dec 10",
      "status": "The Incrdible Hulk"
    },
    {
      "avatar":
        "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
      "name": "Tom Hiddleston",
      "time": "Dec 8",
      "status": "Loki"
    },
    {
      "avatar": "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
      "name": "Don Cheadle",
      "time": "Dec 6",
      "status": "Rhodey"
    },
    {
      "avatar":
        "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
      "name": "Stan Lee",
      "time": "Dec 4",
      "status": "The Big Daddy"
    },
    {
      "avatar":
        "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
      "name": "S.L. Jackson",
      "time": "Dec 2",
      "status": "Shield"
    }
]

  
  

const showUserData = () => {
    
    
    showUser.innerHTML = ``

    userData.map(item => {
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
        chat.style.backgroundImage = `url("images/image1.jpg")`;
    }else if(selectLayout === 'image2'){
        chat.style.backgroundImage = `url("images/image2.jpg")`;
    }else if(selectLayout === 'image3'){
        chat.style.backgroundImage = `url("images/image3.jpg")`;
    }
})



showUserData()