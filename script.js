// Preload Videos
const videoUrls = {
	clear: 'https://cdn.pixabay.com/video/2017/02/28/8015-206146113_large.mp4',
	clouds: 'https://cdn.pixabay.com/video/2023/08/07/174996-852559033_large.mp4',
	rain: 'https://cdn.pixabay.com/video/2019/10/24/28236-368501609_large.mp4',
	snow: 'https://cdn.pixabay.com/video/2022/12/20/143672-784129650_large.mp4',
	thunderstorm: 'https://pixabay.com/videos/rain-lightning-storm-thunder-night-204835/',
	default: 'https://cdn.pixabay.com/video/2024/05/26/213763_large.mp4'
};

const preloadedVideos = {};

// Accessing All HTML Components Required to Perform Actions on.
let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let backgroundVideo = document.getElementById('backgroundVideo');
let randomCityBtn = document.querySelector('.random-city-btn');


//Adding Event Listener to Search Button
button.addEventListener('click', function () {

	// Fection data from open weather API
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=98b525151a7f74060aa103713bbc9bec`)
		.then(response => response.json())
		.then(
			displayData)
		.catch(err => alert('Wrong City Name'));

})

// Random City Button
randomCityBtn.addEventListener('click', function() {
	generateRandomCity();
	fetchWeatherData(inputvalue.value);
    });


    // Function to fetch weather data
const fetchWeatherData = (cityName) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
	.then(response => response.json())
	.then(displayData)
	.catch(err => alert('Wrong City name'));
    };

// Function to Display Weather on HTML Document
const displayData = (weather) => {
	temp.innerText = `${Math.round(weather.main.temp)}°C`
	desc.innerText = `${weather.weather[0].main } ${getWeatherEmoji(weather.weather[0].main)}`
	changeBackgroundVideo(weather.weather[0].main);
}
const changeBackgroundVideo = (weatherDescription) => {
	let videoSrc = '';

	switch (weatherDescription.toLowerCase()) {
		case 'clear':
			videoSrc = 'https://cdn.pixabay.com/video/2017/02/28/8015-206146113_large.mp4'; // Add the appropriate video URL
			break;
		case 'clouds':
			videoSrc = 'https://cdn.pixabay.com/video/2023/08/07/174996-852559033_large.mp4'; // Add the appropriate video URL
			break;
		case 'rain':
			videoSrc = 'https://cdn.pixabay.com/video/2019/10/24/28236-368501609_large.mp4'; // Add the appropriate video URL
			break;
		case 'snow':
			videoSrc = 'https://cdn.pixabay.com/video/2022/12/20/143672-784129650_large.mp4'; // Add the appropriate video URL
			break;
		case 'thunderstorm':
			videoSrc = 'https://pixabay.com/videos/rain-lightning-storm-thunder-night-204835/'; // Add the appropriate video URL
			break;
		default:
			videoSrc = 'https://cdn.pixabay.com/video/2024/05/26/213763_large.mp4'; // Add a default video URL
	}

	backgroundVideo.querySelector('source').src = videoSrc;
	backgroundVideo.load();
};

// Function to get emoji based on weather description
const getWeatherEmoji = (weatherDescription) => {
	switch (weatherDescription.toLowerCase()) {
		case 'clear':
			return '☀️';
		case 'clouds':
			return '☁️';
		case 'rain':
			return '🌧️';
		case 'snow':
			return '❄️';
		case 'thunderstorm':
			return '⛈️';
		default:
			return '🌈';
	}
};

const generateRandomCity = () => {
	const cities = [
		'New York', 'London', 'Tokyo', 'Paris', 'Berlin', 'Moscow', 'Sydney', 'Rome', 'Rio de Janeiro',
		'Ankara', 'Washington D.C.', 'Beijing', 'Cairo', 'Buenos Aires', 'Canberra', 'Dublin', 'Helsinki',
		'Jakarta', 'Kiev', 'Lima', 'Madrid', 'Nairobi', 'Oslo', 'Stockholm', 'Tehran', 'Vienna', 'Warsaw'
	    ];
	const randomIndex = Math.floor(Math.random() * cities.length);
	const randomCity = cities[randomIndex];
	inputvalue.value = randomCity;
    };