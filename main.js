console.log("This is the site javascript")
setTimeout(function() {
let emailval = document.getElementById("email").value
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
const storedEmail = localStorage.getItem('email')
const storedName = localStorage.getItem('name')
const storedNo = localStorage.getItem('phone')
const styleop = localStorage.getItem('chosehtml')
const styleop2 = localStorage.getItem('choseplain')
const Engchoice = localStorage.getItem('S50cc')
const Engchoice2 = localStorage.getItem('S250cc')
const Engchoice3 = localStorage.getItem('S500cc')
const Engchoice4 = localStorage.getItem('S600cc')
const Engchoice5 = localStorage.getItem('S601cc')
const StandardT = localStorage.getItem('Standard')
const CruiserT = localStorage.getItem('Cruiser')
const SportT = localStorage.getItem('Sport')
const TouringT = localStorage.getItem('Touring')
const ScooterT = localStorage.getItem('Scooter')
const OffroadT = localStorage.getItem('Offroad')

if(storedEmail,storedName,storedNo,styleop,styleop2,Engchoice,
   Engchoice2,Engchoice3,Engchoice4,Engchoice5,StandardT,CruiserT,SportT,TouringT,ScooterT,OffroadT){
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

        const marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
		
		        const marker2= new google.maps.Marker({
          position: myLatLng2,
          map: map,
          title: 'Hello World!'
        });
     
		
	    const marker3= new google.maps.Marker({
          position: myLatLng3,
          map: map,
          title: 'Hello World!'
        });
		
		
      }
	  
        // HTML5 geolocation.
		function GetPoS() {
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:52.9046891,lng:-2.1505637},
          zoom: 6
        });
        const infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
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

//This function retrives a Title & Description from the JSON file
function LoopMdata(){
 const req = new XMLHttpRequest();
 
 req.open('get', "https://cdn.rawgit.com/AzulTop/progapi2/24b8cd38/Motocycles.json")
 
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
	let resObj = JSON.parse(responseText);
	console.log(resObj);

     	    setTimeout(function(){ 		
		document.getElementById("PMText").innerHTML 
		+= resObj.Bikes[[Math.floor(Math.random() * 3)]].Title + 
		" " + resObj.Bikes[[Math.floor(Math.random() * 3)]].Description;}, 1000);	
	localStorage.setItem("Title", JSON.stringify(resObj.Bikes[[Math.floor(Math.random() * 3)]].Title));
	localStorage.setItem("Description", JSON.stringify(resObj.Bikes[[Math.floor(Math.random() * 3)]].Description));
	    }
 
}

//This function puts Title & Description from the JSON array into the HTML
function Getparagraph(){
const strTitle = localStorage.getItem('Title')
const strDesc = localStorage.getItem('Description')
const Title = JSON.parse(strTitle)
const Desc = JSON.parse(strDesc)
document.getElementById("PMText").innerHTML = Title + Desc;
}
 
