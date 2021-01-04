var content = document.getElementById("bye");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "http://api.weatherstack.com/current?access_key=2564844a8972dc001333a5dfacab51c8&query=India",
  true
);

xhr.onprogress = function () {
  content.innerText = "Loading ...";
};

xhr.onload = function () {
  if (this.status === 200) {
    let jason = JSON.parse(this.responseText);
    let place = jason.request;
    let my_palce = place.query;
    let weather = jason.current;
    let temp = weather.temperature;
    let humidity = weather.humidity;
    let visibility = weather.visibility;

    content.innerHTML = `<h4>${my_palce}<hr>Temprature: ${temp} celcius<br><br>Humidity: ${humidity}<br><br>Visibility: ${visibility}%<h4/>`;
    console.log(my_palce);
    console.log(place);
    console.log(jason);
    // console.log(humidity);
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
// http://api.weatherstack.com/current?access_key=2564844a8972dc001333a5dfacab51c8&query=India
