const counterEl = document.querySelectorAll('.counter');


counterEl.forEach((counterEl) => {
    counterEl.innerText= "0";

    incrementCounter()

    function incrementCounter() {
        let current = +counterEl.innerText
        const dataceil= counterEl.getAttribute("data-ceil")
        const incremEl = dataceil / 15
        current = Math.ceil(current + incremEl);
        counterEl.innerText = current

        if (current < dataceil) {
            setTimeout(incrementCounter, 100)
        }  else {
            counterEl.innerText = dataceil
        }

    }

})