import { Dog } from "/Dog.js"
import { dogs } from "./data.js"

const like = document.getElementById('like')
const profile = document.getElementById('profile')

const match = new Dog(dogs.shift())


function render(){

    profile.innerHTML = match.getProfileHtml()
}

like.addEventListener('click', function(){
    
})

function switchProfile(){

}

render()