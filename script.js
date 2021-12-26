const inputs = document.querySelectorAll('input')

function lightBulb() {
    this.classList.toggle('bulb-on')
}

inputs.forEach(input => input.addEventListener('click', lightBulb));