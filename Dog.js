//Dog Constructor
import { dogs } from "./data.js"
export { Dog }

class Dog {
    constructor(data){
        Object.assign(this , data)
    }


    getProfileHtml(){

        return `<div class="image">
                <img src="${this.avatar}" alt="">
            </div>
            <div class="about">
                <h2>${this.name}, ${this.age} </h2>
                <p>${this.bio}</p>
            </div>`

    }


}





