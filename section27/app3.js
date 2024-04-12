// async function hello() {

// }

// const sing = async () => {
//     throw new Error("ERROR")
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH:", data)
//     }).catch((err) => {
//         console.log('Oh no, Promise Rejected' + err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials'
    if (password === 'mypass') return 'Welcome'
    throw 'Invalid Password'
}