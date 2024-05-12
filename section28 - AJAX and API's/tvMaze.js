const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let text = input.value
    let h1 = document.querySelector('h1')
    h1.innerText = text
    const inputQuery = form.elements.query.value
    const config = {params: {q: inputQuery}}
    let req = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    console.log(req)
    for (let item of req.data) {
        console.log(item)
        let newImage = document.createElement("img")
        try {
            newImage.src = item.show.image.medium
            document.body.append(newImage)
        } catch (e) {
            console.log("Error:", e)
        }
        
    }
})