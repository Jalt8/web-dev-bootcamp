axios.get("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESPONSE!!!")
        console.log(res.data)
    })

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    } catch (e) {
        console.log("ERROR:", e)
    }
}

const getDadJoke = async () => {
    try {
        const headers = {headers: {Accept: "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com", headers)
        console.log(res)
        console.log(res.data.joke)
        return res.data.joke
    } catch (e) {
        console.log("Error: ", e)
    }
}

getStarWarsPerson(2)
getStarWarsPerson(10)

const jokeButton = document.querySelector("button")
jokeButton.addEventListener("click", async () => {
     let joke = await getDadJoke()
     const ul = document.querySelector("#jokes")
     let li = document.createElement("li")
     li.append(joke)
     ul.appendChild(li)
})