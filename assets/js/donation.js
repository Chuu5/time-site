const purchase = document.querySelector(".purchase")
const thanks = document.querySelector(".purchasing .thanks")
const prices = [1, 10, 24]
const radios = document.querySelectorAll("input[type=radio]")


purchase.addEventListener("click", ( () => {
    for (let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            body.classList.add("appear")
            thanks.innerHTML = `<p>Thanks for purchasing our time</p><p class="opacity">Hours donated: ${prices[i]}</p>`
        }
    }

    setTimeout( () => {
        body.classList.remove("appear")
        thanks.innerHTML = ""
        
    }, 2000)
}))