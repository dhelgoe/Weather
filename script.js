var city = document.querySelector('#submit')

city.addEventListener('click', function(){
    var userInput = document.querySelector('#citySearch')
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput.value}&limit=3&appid=d98d42ce70a6969152ff956c930079d8`).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data[0])
        var lat = data[0].lat
        var lon = data[0].lon
        console.log(lat,lon)

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d98d42ce70a6969152ff956c930079d8`).then((data) => {
        return data.json()

    }).then((data) =>{
        console.log(data.list[0])
        console.log(data.list[0].main.temp)
        var temperature = data[0].temp

    } ) 
        
    
})
    userInput.value = ''
})

