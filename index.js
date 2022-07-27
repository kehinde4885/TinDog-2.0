import { Dog } from "/Dog.js"
import { dogs } from "./data.js"

const like = document.getElementById('like-btn')
const nope = document.getElementById('nope-btn')
const profile = document.getElementById('profile')

const badgePlaceholder = document.getElementById('badges')

like.addEventListener('click', displayLikeBadge)
nope.addEventListener('click', displayNopeBadge)

let iterator = dogs.entries()

console.log(iterator)
let match = new Dog(dogs.shift())

console.log(match.hasBeenSwiped)


function render(){
    
    console.log(match.hasBeenSwiped)
    
    profile.innerHTML = match.getProfileHtml()
    
    badgePlaceholder.innerHTML = ""
    

}


function switchProfile(){

    if(dogs.length >= 1){
    match = new Dog(dogs.shift())
    render()
    }
}


function displayLikeBadge(){
    
    badgePlaceholder.innerHTML = match.getLikeBadgeHtml()
    
    setTimeout(switchProfile , 2000)

}

function displayNopeBadge(){
    
    badgePlaceholder.innerHTML = match.getNopeBadgeHtml()
    
    setTimeout(switchProfile , 2000)

}

render()