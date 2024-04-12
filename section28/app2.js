fetch("https:/swapi.dev/api/people/1/")
    .then(res => {
        console.log("RESOLVED!", res)
        return res.json();
    }).then((data) => {
        console.log(data);
        return fetch("https:/swapi.dev/api/people/2/")
    }).then(res => {
        console.log("SECOND REQUEST RESOLVED!", res)
        return res.json();
    }).then((data) => {
        console.log(data);
        return fetch("https:/swapi.dev/api/people/3")
    }).then(res => {
        console.log("THIRD REQUEST RESOLVED!", res)
        return res.json();
    })
    .catch(err => {
        console.log("Error Has occured", err)
    })