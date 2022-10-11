var city = document.querySelector('#submit')
var cityname = document.querySelector('#cityname')
var currenttemp = document.querySelector('#currenttemp')
var windspeed = document.querySelector('#windspeed')
var humidity = document.querySelector('#humidity')
var photo = document.querySelector('#icon')


city.addEventListener('click', function(){
    var userInput = document.querySelector('#citySearch')
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput.value}&limit=3&appid=d98d42ce70a6969152ff956c930079d8`).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data[0])
        var lat = data[0].lat
        var lon = data[0].lon
        console.log(lat,lon)
        console.log(data[0].name)
        cityname.textContent=data[0].name


    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d98d42ce70a6969152ff956c930079d8`).then((data) => {
        return data.json()

    }).then((data) =>{
        console.log(data.list[0])
        console.log(data.list[0].main.temp)
        var temperature = data.list[0].weather[0];
        console.log(temperature)
        currenttemp.textContent=data.list[0].main.temp
        console.log(data.list[0].wind.deg)
        console.log(data.list[0].wind.speed)
        windspeed.textContent=data.list[0].wind.speed
        humidity.textContent=data.list[0].main.humidity
        console.log(data.list[0].weather[0].icon)
        var icon = data.list[0].weather[0].icon
        var iconurl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
        console.log(iconurl)
        photo.src=iconurl

    } ) 
        
    
})
    userInput.value = ''
})

