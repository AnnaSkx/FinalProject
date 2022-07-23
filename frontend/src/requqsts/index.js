export const getBook = (resolve, reject = () => {}) => {
    fetch('http://localhost:5000/api/book/add', {
        method: 'POST'
    })
        .then(data=>data.json(), reject)
        .then(resolve);
}


export const allBooks = (resolve, reject = () => {}) => {
    fetch('http://localhost:5000/api/book/all'),{
        method: 'GET'
    }
    .then(data=>data.json(), reject)
    .then(resolve);
}

