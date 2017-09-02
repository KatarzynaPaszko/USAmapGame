function initMap() {
  var customMapType = new google.maps.StyledMapType([
      {
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 38.4416459, lng: -95.2911885},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);


  google.maps.event.addListener(map,'click',function(event) {
    //Get longtutude and lattitude of clicked place
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
      let lattitude = event.latLng.lat()
      let longtitude =  event.latLng.lng()
    // Add pin after user click on the map
      placeMarker(event.latLng);
  });

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "zimno"
    });
    // marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
}
}

// Hide starting div with start button and unblur game
let startBtn = document.querySelector(".startBtn");
let startPanel = document.querySelector(".startInstruction");
let gamePanel = document.querySelector(".gamePanel")
let gameMap = document.querySelector("#map")

function startGame(e) {
  startPanel.classList.add("visibility");
  gamePanel.style.filter = "blur(0px)";
  gameMap.style.filter = "blur(0px)";
}

startBtn.addEventListener("click", startGame);

// Show hint
var hintDisplay = document.querySelector(".hintDisplay");
var hintBtn = document.querySelector(".hintBtn");

function showHint(e) {
  hintDisplay.classList.remove("hintDisplay");
}

hintBtn.addEventListener("click", showHint);
