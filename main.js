console.log("This is the site javascript")
const myLatLng = {
	lat: 52.9029218,
	lng: -1.8870629
};
const myLatLng2 = {
	lat: 52.9866342,
	lng: -2.2034458
};
const myLatLng3 = {
	lat: 53.0807631,
	lng: -2.4435213
};

function initMap() {
	const defaultpos = {
		lat: 53.0002046,
		lng: -2.1587255
	};
	let map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: defaultpos
	});
	const marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Uttoxeter"
	});
	const marker2 = new google.maps.Marker({
		position: myLatLng2,
		map: map,
		title: "Stoke-on-Trent"
	});
	const marker3 = new google.maps.Marker({
		position: myLatLng3,
		map: map,
		title: "Crewe"
	})
}

function GetPoS() {
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 52.9046891,
			lng: -2.1505637
		},
		zoom: 6
	});
	const infoWindow = new google.maps.InfoWindow({
		map: map
	});
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			let pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			infoWindow.setPosition(pos);
			infoWindow.setContent("Location found.");
			map.setCenter(pos)
		}, function() {
			handleLocationError(!0, infoWindow, map.getCenter())
		})
	} else {
		handleLocationError(!1, infoWindow, map.getCenter())
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ? "Error: The Geolocation service failed." : "Error: Your browser doesn\'t support geolocation.")
}

function Showmenu() {
	if (Mmenu.style.display == "none") <!--If element isn't visible by default when clicked will be visible-->
		document.getElementById("Mmenu").style.display = "initial";
	else {
		<!--If visible it won't be after it's clicked again-->
		document.getElementById("Mmenu").style.display = "none";
	}
}
//This function retrives a Title & Description from the JSON file
function LoopMdata() {
	const req = new XMLHttpRequest();
	req.open('get', "https://cdn.rawgit.com/AzulTop/progapi2/24b8cd38/Motocycles.json")
	req.onreadystatechange = function() {
			// Look for the "Complete" state (4)
			if (req.readyState === 4) {
				// HTTP Code 200 means success
				if (req.status === 200) {
					gotResponseText(req.responseText);
				} else {
					console.log("Failed");
				}
			}
		}
		// Send off the request,
		// with no extra data (the null param)
	req.send(null);
	// Parse Response – called in the 
	// event handler for readystatechange
	function gotResponseText(responseText) {
		let resObj = JSON.parse(responseText);
		console.log(resObj);
		setTimeout(() => {
			// displays random Bike data from JSON file in html after file is retrived 
			document.getElementById("PMText").innerHTML += resObj.Bikes[[Math.floor(Math.random() * 3)]].Title + " " + resObj.Bikes[[Math.floor(Math.random() * 3)]].Description;
		}, 1000);
		//saves in Localstorage
		localStorage.setItem("Title", JSON.stringify(resObj.Bikes[[Math.floor(Math.random() * 3)]].Title));
		localStorage.setItem("Description", JSON.stringify(resObj.Bikes[[Math.floor(Math.random() * 3)]].Description));
	}
}
//This function puts Title & Description from the JSON array into the HTML
function Getparagraph() {
	const strTitle = localStorage.getItem('Title')
	const strDesc = localStorage.getItem('Description')
	const Title = JSON.parse(strTitle)
	const Desc = JSON.parse(strDesc)
	document.getElementById("PMText").innerHTML = Title + Desc
}
