const increment = document.querySelectorAll(".increment")
const value = document.querySelectorAll(".number")
const decrement = document.querySelectorAll(".decrement")
const purchase = document.querySelectorAll(".submit-button")
const thanks = document.querySelector(".beeg .thanks")
const thanksInMedia = document.querySelectorAll(".thanks")

let prices = [10, 50, 200]
let count = [0, 0, 0]


for(let i = 0; i < purchase.length; i++) {

    purchase[i].addEventListener("click", () => {

        if(count[i] > 0 && body.clientWidth > 950) {
            thanks.innerHTML = `<p>Thanks for purchasing our time</p><p class="opacity">Price: $${count[i] * prices[i]}</p>`
            body.classList.add("appear")
            value[i].innerHTML = 0
            count[i] = 0
            setTimeout( () => {
                body.classList.remove("appear")
                thanks.innerHTML = ""
                
            }, 3000)

        } else if (count[i] > 0 && body.clientWidth <= 950) {
            thanksInMedia[i].classList.add("media")

            thanksInMedia[i].innerHTML = `<p>Thanks for purchasing our time</p><p class="opacity">Price: $${count[i] * prices[i]}</p>`
            body.classList.add("appear")
            value[i].innerHTML = 0
            count[i] = 0
            setTimeout( () => {
                body.classList.remove("appear")
                thanksInMedia[i].innerHTML = ""
                thanksInMedia[i].classList.remove("media")
            }, 3000)
        } else {
            alert("You can't buy 0 products")
        }
        
    })
}


for (let i = 0; i < increment.length; i++) {

    increment[i].addEventListener("click", () => {
        count[i] += 1
        value[i].innerHTML = count[i]
    })
}

for (let i = 0; i < decrement.length; i++) {

    decrement[i].addEventListener("click", () => {
        if (count[i] > 0) {
            count[i] -= 1
        }
        value[i].innerHTML = count[i]
    })
}

