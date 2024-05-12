// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext()
//     }, delay)
// }

// delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("yellow", 1000, () => {
//             delayedColorChange("green", 1000, () => {
//                 delayedColorChange("blue", 1000, () => {

//                 })
//             })
//         })
//     })
// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, 1000)
    })
}

delayedColorChange("red", 1000)
    .then(() => {
        return delayedColorChange("orange", 1000)
    })
    .then(() => {
        return delayedColorChange("yellow", 1000)
    })
    .then(() => {
        return delayedColorChange("green", 1000)
    })
    .then(() => {
        return delayedColorChange("blue", 1000)
    })