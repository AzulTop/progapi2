console.log("This is the site javascript")
setTimeout(function() {
var emailval = document.getElementById("email").value
 name = document.getElementById("name").value,
 phone = document.getElementById("phoneno").value,
 op1 = document.getElementById("chosehtml").checked,
 op2 = document.getElementById("choseplain").checked,
 chose50cc = document.getElementById("S50cc").checked,
 chose250cc = document.getElementById("S250cc").checked,
 chose500cc= document.getElementById("S500cc").checked,
 chose600cc = document.getElementById("S600cc").checked,
 chose601cc = document.getElementById("S601cc").checked,
 Chosestandard = document.getElementById("Standard").checked,
 Chosecruiser = document.getElementById("Cruiser").checked,
 Chosesport = document.getElementById("Sport").checked,
  ChosesTouring = document.getElementById("Touring").checked,
  ChosesScooter = document.getElementById("Scooter").checked,
   ChoseOffroad = document.getElementById("Offroad").checked
localStorage.setItem("email", emailval)
localStorage.setItem("name", name)
localStorage.setItem("phone", phone)
localStorage.setItem("chosehtml", op1)
localStorage.setItem("choseplain", op2)
localStorage.setItem("S50cc", chose50cc)
localStorage.setItem("S250cc", chose250cc)
localStorage.setItem("S500cc", chose500cc)
localStorage.setItem("S600cc", chose600cc)
localStorage.setItem("S601cc", chose601cc)
localStorage.setItem("Standard", Chosestandard)
localStorage.setItem("Cruiser", Chosecruiser)
localStorage.setItem("Sport", Chosesport)
localStorage.setItem("Touring", ChosesTouring)
localStorage.setItem("Scooter", ChosesScooter)
localStorage.setItem("Offroad", ChoseOffroad)

; }, 6000);

function load() {
var storedEmail = localStorage.email
var storedName = localStorage.name
var storedNo = localStorage.phone
var styleop = localStorage.html
var styleop2 = localStorage.plain
var Engchoice = localStorage.S50cc
var Engchoice2 = localStorage.S250cc
var Engchoice3 = localStorage.S500cc
var Engchoice4 = localStorage.S600cc
var Engchoice5 = localStorage.S601cc
var StandardT = localStorage.Standard
var CruiserT = localStorage.Cruiser
var SportT = localStorage.Sport
var TouringT = localStorage.Touring
var ScooterT = localStorage.Scooter
var OffroadT = localStorage.Offroad

if(storedEmail,storedName,storedNo,styleop,styleop2,petchoice,petchoice2,petchoice3,petchoice4,petchoice5){
document.getElementById("email").value = storedEmail
document.getElementById("name").value = storedName
document.getElementById("phoneno").value = storedNo
document.getElementById("chosehtml").value = styleop
document.getElementById("choseplain").value = styleop2
document.getElementById("S50cc").value = Engchoice
document.getElementById("S250cc").value = Engchoice2
document.getElementById("S500cc").value = Engchoice3
document.getElementById("S600cc").value = Engchoice4
document.getElementById("S601cc").value = Engchoice5
document.getElementById("Standard").value = StandardT
document.getElementById("Cruiser").value = CruiserT
document.getElementById("Sport").value = SportT
document.getElementById("Touring").value = TouringT
document.getElementById("Scooter").value = ScooterT
document.getElementById("Offroad").value = OffroadT
}
}

function cleardata() {
window.localStorage.clear();
}


//1st 56 Lambert Rd, Uttoxeter, ST14 7QG
//20 Marina Rd, Stoke-on-Trent, ST4 5PG
//146 Davenport Ave, Crewe, CW2 6LT

        const myLatLng = {lat:52.9029218,lng:-1.8870629};
        const myLatLng2 = {lat:52.9866342,lng:-2.2034458};
		const myLatLng3 = {lat:53.0807631,lng:-2.4435213};
function initMap() {
	    const defaultpos = {lat:53.0002046,lng:-2.1587255};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: defaultpos
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
		
		        var marker2= new google.maps.Marker({
          position: myLatLng2,
          map: map,
          title: 'Hello World!'
        });
     
		
	    var marker3= new google.maps.Marker({
          position: myLatLng3,
          map: map,
          title: 'Hello World!'
        });
		
		
      }
	  
        // HTML5 geolocation.
		function GetPoS() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:52.9046891,lng:-2.1505637},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
           }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

	  function CloserMark(){
		  
		  
	  }



function Showmenu() {
if(Mmenu.style.display == "none")
<!--If element isn't visible by default when clicked will be visible-->
document.getElementById("Mmenu").style.display = "initial";
else{
<!--If visible it won't be after it's clicked again-->
document.getElementById("Mmenu").style.display = "none";
}
}

function LoopMdata(){
 var req = new XMLHttpRequest();
 
 req.open('get', "https://rawgit.com/AzulTop/progapi2/master/Motocycles.json")
 
 req.onreadystatechange = function(){
	// Look for the "Complete" state (4)
	if(req.readyState === 4){
		 // HTTP Code 200 means success
		if(req.status === 200){
			gotResponseText(req.responseText);
		}else{
			console.log("Failed");
		}
	}
} 

// Send off the request,
// with no extra data (the null param)
req.send(null);

// Parse Response – called in the 
// event handler for readystatechange
function gotResponseText(responseText){
	var resObj = JSON.parse(responseText);
	console.log(resObj);
} 
 
 
 
 
 i = 0 
console.log(i)
document.getElementById("PMText").innerHTML +=
resObj.Bikes[i].Title + " " + resObj.Bikes[i].Description;
}
 
