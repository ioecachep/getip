window.addEventListener('load', () => {
    console.log('All assets are loaded')
    
    // lay dia chi ip
    fetch('https://httpbin.org/ip')
        .then(response => {
            const data = response.json()
            return data
        })
        .then(data => {
            console.log(data.origin)
            const getIp = document.getElementById('get-ip')
            getIp.innerHTML = data.origin
        })
        .catch(error => console.error(error))

})

