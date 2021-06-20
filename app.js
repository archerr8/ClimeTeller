
const inputTxt = document.querySelector('.inputtxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showdata');
const button2 = document.querySelector('.btn2');

//get api key by login to openweather.org
const api_key = "4023c4508fbfdb437b2cdd67ec30a413";

//now add eventlistener

button2.addEventListener('click',() => {
	inputTxt.value = " ";
    showData.innerHTML = ``;
});

button.addEventListener('click', () => {

//get input value
	const cityInput = inputTxt.value;

	// console.log(cityinput);

	//now fetch data through get api
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${api_key}`)
	.then(res => res.json())
		.then(data => {
             
             inputTxt.value = " ";

            showData.innerHTML = `
            <div class="results" >
            <ul><li class="desc">Clouds - ${data.weather[0].description}</li>
            <li class="city">City - ${data.name}</li>
            <li class="country">Country - ${data.sys.country}</li>
             <li class="temp">Temp - ${data.main.temp} C</li>
             <li class="wind">Wind Speed - ${data.wind.speed} </li>
            </ul>
            </div>`;
		});

});


