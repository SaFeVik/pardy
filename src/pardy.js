/* Henter wrapper */
let festWrapperEl = document.querySelector("#festWrapper")

/* Fest data */
let fester = [
    {
        sted: "Nittedal",
        baddies: "Nittedal",
        dato: "3/2/23",
        hovedbilde: "elias_snork.jpeg",
        bilder: ["elias_kjeft.jpg", "felix_tommel.jpg", "gustav_3damer.jpg", "hedda_nazi.jpg", "ib_bror.jpg", "gutter_awkward.jpg"],
        notes: ["Elias sovna", "Thorvald hadde despawna", "Elias stjal en dame"],
        medlemmer: ["Felix", "Elias", "Thorvald", "Johannes", "Andy", "Gustav", "Thomas", "Sondre", "Ib", "Philip", "Oskar"]
    },
    {
        sted: "Elias",
        baddies: "Sandvika",
        dato: "4/3/23",
        hovedbilde: "elias_hjelp.jpeg",
        bilder: ["elias_elefanten.jpg", "filip_sofa.jpg", "elias_stol.jpg"],
        notes: ["Elias hjalp Iris", "Andy var på nære nippet", "Thorvald og Filip hadde despawna","Gustav var takknemlig"],
        medlemmer: ["Felix", "Elias", "Thorvald",  "Johannes", "Andy", "Filip", "Gustav", "Thomas", "Sondre", "Ib", "Philip"]
    },
    {
        sted: "Thorvald",
        baddies: "Valler",
        dato: "15/4/23",
        hovedbilde: "thorvald_naken.jpg",
        bilder: ["felix_dapup.jpg", "filip_renessansen.jpg", "gustav_ansikt.jpg", "felix_johannes.jpg", "thorvald_oppkast.jpg"],
        notes: ["Elias og Johannes var på festern", "En eneste stor orgie", "Dårlige samtaler", "Mat ble kastet"],
        medlemmer: ["Felix", "Elias", "Thorvald",  "Johannes", "Andy", "Filip", "Gustav", "AndreasK", "JohannesG", "KasperS", "NRG type"]
    },
    {
        sted: "Felix",
        baddies: "Rizzenvilde",
        dato: "29/4/23",
        hovedbilde: "johannes_bayda.jpg",
        bilder: ["johannes_bokse.jpg", "thorvald_vannpistol.jpg", "felix_bart.jpg", "felix_planke.jpg", "aef_hard.jpg", "felix_swipe.jpg", "johannes_fingern.jpg", "gustav_rizz.jpg", "iris_munn.jpg"],
        notes: ["Andreas hadde kontrakt", "God stemning", "Trekantdrama med Gusti Madeleine og Andy", "Mye cola, tusj og vektspetakkel"],
        medlemmer: ["Felix", "Elias", "Thorvald",  "Johannes", "Andy", "Filip", "Gustav", "AndreasK", "FilipT", "Marius", "EliasB"]
    },
]

// Lager fest elementer
for (let i = 0; i < fester.length; i++) {
    festWrapperEl.innerHTML += `
        <div class="fest">
        <h2 class="stedBox">
            <img class="mapIcon" src="./bilder/icons/map_icon.png" alt="pin">
            <span class="sted">${fester[i].sted}</span>
        </h2>
        <div class="rating">
            <img src="./bilder/icons/star.png" alt="star">
            <img src="./bilder/icons/star.png" alt="star">
            <img src="./bilder/icons/star.png" alt="star">
            <img src="./bilder/icons/star.png" alt="star">
            <img src="./bilder/icons/star.png" alt="star">
        </div>
        <div class="ratingBox">
            <h1 class="x xR">X</h1>
            <p>Hva rater du denne festen?</p>
            <input type="range" name="rating" class="ratingRange">
            <span class="ratingValue">5</span>
            <button class="ratingButton">Send rating</button>
        </div>
        <img src="./bilder/icons/comment_icon.png" alt="comment" class="comment">
        <img src="./bilder/icons/images_icon.png" alt="images" class="images">
        <img src="./bilder/icons/notes_icon.png" alt="notes" class="notes">
        <h3 class="datoBox">
            <img class="dateIcon" src="./bilder/icons/date_icon.png" alt="date">
            <span class="dato">${fester[i].dato}</span>
        </h3>
        <h3 class="baddiesBox">
            <img class="girlIcon" src="./bilder/icons/girl.png" alt="girl">
            <span class="baddies">${fester[i].baddies}</span>
        </h3>
        <div class="imagesSection">
            <div class="imagesBox"></div>
            <h1 class="x xI">X</h1>
        </div>
        <div class="notesSection"><h1 class="x xN">X</h1></div>
        <div class="commentSection">
            <h1 class="x xC">X</h1>

            <div class="commentPlace">

            </div>
            <div class="commentInputDiv">
                <input type="text" placeholder="Skriv en kommentar..." class="commentInput">
                <img src="./bilder/icons/send_icon.png" alt="send" class="sendIcon">
            </div>

        </div>
        </div>
    `
    let festEls = document.querySelectorAll(".fest")
    festEls[i].style.backgroundImage = `url(./bilder/${fester[i].hovedbilde})`
    let ratingEls = document.querySelectorAll(".rating")

    ratingEls[i].style.background = "white"
    
    let imagesBoxEls = document.querySelectorAll(".imagesBox")
    let notesSectionEls = document.querySelectorAll(".notesSection")
    /* images */
    for(let j = 0; j < fester[i].bilder.length; j++) {
        imagesBoxEls[i].innerHTML += `
            <img src="./bilder/${fester[i].bilder[j]}" alt="fest" class="festBilde">
        `
    }
    /* notes */
    for(let j = 0; j < fester[i].notes.length; j++) {
        notesSectionEls[i].innerHTML += `<p>-${fester[i].notes[j]}</p>`
    }
    notesSectionEls[i].innerHTML += `Medlemmer(${fester[i].medlemmer.length}):<br>`
    for(let j = 0; j < fester[i].medlemmer.length; j++) {
        notesSectionEls[i].innerHTML += ` |${fester[i].medlemmer[j]}|`
    }


}
let festEls = document.querySelectorAll(".fest")
let imagesSectionEls = document.querySelectorAll(".imagesSection")
let commentSectionEls = document.querySelectorAll(".commentSection")
let notesSectionEls = document.querySelectorAll(".notesSection")
let ratingBoxEls = document.querySelectorAll('.ratingBox')

// X knapper for images, notes og comments
for(let i=0; i<festEls.length; i++){
    let btns = festEls[i].querySelectorAll(".fest > img")
    for(let j=0; j<btns.length; j++){
        btns[j].addEventListener('click', function(){
            if(btns[j].classList.contains('images')){
                imagesSectionEls[i].classList.add('show')
            }
            else if(btns[j].classList.contains('comment')){
                commentSectionEls[i].classList.add('show')
            }
            else if(btns[j].classList.contains('notes')){
                notesSectionEls[i].classList.add('show')
            }
        })
    }
    let xBtns = festEls[i].querySelectorAll('.x')
    for(let j=0; j<xBtns.length; j++){
        xBtns[j].addEventListener('click', function(){
            if(xBtns[j].classList.contains('xI')){
                imagesSectionEls[i].classList.remove('show')
            }
            else if(xBtns[j].classList.contains('xN')){
                notesSectionEls[i].classList.remove('show')
            }
            else if(xBtns[j].classList.contains('xC')){
                commentSectionEls[i].classList.remove('show')
            }else if(xBtns[j].classList.contains('xR')){
                ratingBoxEls[i].classList.remove('show')
                ratingEls[i].style.background = endreRating(i)
            }
        })
    }
}

// importer funksjoner fra firebase
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    getDocs, updateDoc
} from 'firebase/firestore'
import {
    GoogleAuthProvider,
    getAuth, signInWithPopup, signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCeeXGQ8NPfS79SV4EtkATfdcoylqA2DQQ",
    authDomain: "pardy-26a1a.firebaseapp.com",
    projectId: "pardy-26a1a",
    storageBucket: "pardy-26a1a.appspot.com",
    messagingSenderId: "966279681882",
    appId: "1:966279681882:web:5a09d1faaa08321b68c563"
}
// Fiks basics
initializeApp(firebaseConfig)

const db = getFirestore()

const ratingsColRef = collection(db, 'ratings')
const commentsColRef = collection(db, 'comments')
const usersColRef = collection(db, 'users')

// Ratings
let ratings
onSnapshot(ratingsColRef, (snapshot) => {
    ratings = []
    snapshot.docs.forEach((doc) => {
        ratings.push({ ...doc.data(), id: doc.id })
    })
    for(let i=0; i<festEls.length; i++){
        if(!ratings[i]){
            addDoc(ratingsColRef, {
                rating: [],
            })
        }
        for(let j=0; j<ratings[i].rating.length; j++){

            if(ratings[i].rating[j].userName == auth.currentUser.displayName && auth.currentUser.displayName){
                ratingBtns[i].style.display = "none"
            }
        }
        if(ratings[i].rating.length > 0){
            ratingEls[i].style.background = endreRating(i)
        }
    }
})

function endreRating(Nr){
    let sum = 0
    for(let i=0; i<ratings[Nr].rating.length; i++){
        sum += ratings[Nr].rating[i].ratingNr
    }

    const ratingValue = Math.ceil(sum/ratings[Nr].rating.length)
    let style = `linear-gradient(to right, hsl(${ratingValue*12.5}, 100%, 43%) 0%, hsl(${ratingValue*12.5}, 100%, 43%) ${ratingValue}0%, #ffffff ${ratingValue}0%, #ffffff 100%)`
    return style
}


const ratingRangeEls = document.querySelectorAll('.ratingRange')
const ratingValueEls = document.querySelectorAll('.ratingValue')
const ratingEls = document.querySelectorAll('.rating')
const ratingBtns = document.querySelectorAll('.ratingButton')



for(let i=0; i<ratingRangeEls.length; i++){
    ratingEls[i].addEventListener('click', function(){
        ratingBoxEls[i].classList.add('show')
    })
    ratingBtns[i].addEventListener('click', function(){
        ratingBoxEls[i].classList.remove('show')
        const ratingValue = Math.floor(ratingRangeEls[i].value/10)

        const docRef = doc(db, 'ratings', ratings[i].id)
        ratings[i].rating.push(
            {
                ratingNr: ratingValue, 
                userName: auth.currentUser.displayName
            }
        )
        updateDoc(docRef, {
            rating: ratings[i].rating,
        })
    })
    ratingRangeEls[i].addEventListener('input', function(){
        const ratingValue = ratingRangeEls[i].value/10
        ratingValueEls[i].innerHTML = Math.floor(ratingValue)
        ratingEls[i].style.background = `linear-gradient(to right, hsl(${ratingValue*12.5}, 100%, 43%) 0%, hsl(${ratingValue*12.5}, 100%, 43%) ${ratingValue*10}%, #ffffff ${ratingValue*10}%, #ffffff 100%)`
    })
}

// Slett ratings
/* let baddiesBoxEl = document.querySelector('.baddiesBox')
baddiesBoxEl.onclick = async function(){
    for(let i=0; i<ratings.length; i++){
        const docRef = doc(db, 'ratings', ratings[i].id)
        await deleteDoc(docRef)
    }
} */

// Google Authenticatino
const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const loggInnBtn = document.querySelector('#loggInn')
const loggUtBtn = document.querySelector('#loggUt')
loggInnBtn.addEventListener('click', signingIn)
loggUtBtn.addEventListener('click', signingOut)
const userNameEl = document.querySelector('#userName')
const loginErrorEl = document.querySelector('#loginError')
let loginMessageEl = document.querySelector('.loginMessage')

function signingIn(){
    if(auth){
        signOut(auth)
    }
    signInWithPopup(auth, googleProvider)
}
function signingOut(){
    signOut(auth)
    loginMessageEl.innerHTML = 'Please logg inn mann'
}
let users
onSnapshot(usersColRef, (snapshot) => {
    users = []
    snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    authChange()
})
function authChange(){
    auth.onAuthStateChanged((user) =>{
        if(user){
            for(let i=0; i<users.length; i++){
                if(user.email == users[i].email){
                    userNameEl.innerHTML = user.displayName
                    loginErrorEl.classList.remove('show')
                    festWrapperEl.classList.remove('hide')
                    break
                }else{
                    loginMessageEl.innerHTML = `<span class="name">${user.displayName}</span> har ikke adgang du der du hahahahhaah!`
                }
            }
            for(let i=0; i<festEls.length; i++){
                for(let j=0; j<ratings[i].rating.length; j++){
                    if(ratings[i].rating[j].userName == user.displayName){
                        ratingBtns[i].style.display = "none"
                        console.log("none", ratings[i].rating[j].userName)
                        break
                    }else{
                        ratingBtns[i].style.display = "block"
                        console.log("block", ratings[i].rating[j].userName)
                    }
                }
            }
        }else{
            userNameEl.innerHTML = "Not logged in"
            loginErrorEl.classList.add('show')
            festWrapperEl.classList.add('hide')
        }
    })
}



// Kommentarer
let commentPlaceEls = document.querySelectorAll('.commentPlace')
let commentInputEls = document.querySelectorAll('.commentInput')
let sendIconEls = document.querySelectorAll('.sendIcon')

let aktivKommentering
for(let i=0; i<sendIconEls.length; i++){
    commentInputEls[i].addEventListener('click', function(){
        aktivKommentering = i
    })
    sendIconEls[i].addEventListener('click', function sendComment(){
        aktivKommentering = i
        const docRef = doc(db, 'comments', comments[aktivKommentering].id)
        comments[aktivKommentering].commentArr.push(commentInputEls[aktivKommentering].value)
        comments[aktivKommentering].userArr.push(auth.currentUser.displayName)
        updateDoc(docRef, {
            commentArr: comments[aktivKommentering].commentArr,
            userArr: comments[aktivKommentering].userArr
        })
        commentInputEls[aktivKommentering].value = ""
    })
}
document.addEventListener('keyup', function(e){
    if(e.key == "Enter"){
        sendIconEls[aktivKommentering].click()
    }
})


let comments

onSnapshot(commentsColRef, (snapshot) => {
    comments = []
    snapshot.docs.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id })
    })
    for(let i=0; i<festEls.length; i++){
        if(!comments[i]){
            addDoc(commentsColRef, {
                commentArr: [],
                userArr: []
            })

        }
        commentPlaceEls[i].innerHTML = ""
            if(comments[i].commentArr.length != 0){
                for(let j=0; j<comments[i].commentArr.length; j++){
                    commentPlaceEls[i].innerHTML += `
                    <div class="commentDiv">
                        <h4 class="commentUser">${comments[i].userArr[j]}</h4>
                        <p class="commentTxt">${comments[i].commentArr[j]}</p>
                        <p class="commentSlett">Slett</p>
                    </div>
                    `
                }
            }
    }
    addSlettEvent()
})
function addSlettEvent(){
    for(let i=0; i<festEls.length; i++){
        let commentSlettEls = festEls[i].querySelectorAll('.commentSlett')
        for(let j=0; j<commentSlettEls.length; j++){
            commentSlettEls[j].addEventListener('click', function slettComment(){
                const docRef = doc(db, 'comments', comments[i].id)
                comments[i].commentArr.splice(j, 1)
                comments[i].userArr.splice(j, 1)
                updateDoc(docRef, {
                    commentArr: comments[i].commentArr,
                    userArr: comments[i].userArr
                })
                aktivKommentering = i
            })
        }
    }
}
