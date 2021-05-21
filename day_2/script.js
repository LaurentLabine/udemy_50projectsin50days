const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if (currentActive < circles.length)
        currentActive++
    update()
    console.log(currentActive)
})

prev.addEventListener('click', () => {
    if (currentActive > 1)
        currentActive--
    console.log(currentActive)
    update()
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive)
            circle.classList.add('active')
        else
            circle.classList.remove('active')
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive === 1)
        prev.disabled = true
    else if (currentActive === circles.length)
        next.disabled = true;
    else {
        prev.disabled = false;
        next.disabled = false;
    }

}