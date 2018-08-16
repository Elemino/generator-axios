module.exports = {
    getOne: function () {
        fetch('')
        .then(res => res.json())
        .then (data => {
            console.log(data)
        })
    }
}