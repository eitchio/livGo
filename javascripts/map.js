//initialize the map         
var map = L.map('map').setView([53.404874, -2.985720], 12);
var backgroundMap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
subdomains: 'abcd',
attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a>contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
maxZoom: 19
});

backgroundMap.addTo(map);

const landMarks = 'https://raw.githubusercontent.com/eitchio/livLandM/master/livLandmarks.json';
var locations = [];

$.ajax(landMarks, {
  method: "GET",

  success: function(data){
      locations = JSON.parse(data);
            
      for( i = 0; i<locations.length; i++){

      locations[i].name = L.marker([locations[i].latitude, locations[i].longitude]).addTo(map).bindPopup(locations[i].description); 
      $(locations[i].name._icon).addClass(locations[i].category); 
       };
  }
});



/*
  //shopping and restaurants
  var boldStreet = L.marker([53.404414, -2.981002]).addTo(map);
  var larkLane = L.marker([53.381206, -2.945778]).addTo(map);
  var livOne = L.marker([53.403641, -2.987286]).addTo(map).bindPopup("Liverpool One is a world famous open-air shopping and restaurant hub");
  var chinaTown = L.marker([53.399964, -2.977109]).addTo(map).bindPopup("Liverpool's Chinatown was the first to be established in Europe");
  $(boldStreet._icon).addClass('shopping');
  $(larkLane._icon).addClass('shopping');
  $(livOne._icon).addClass('shopping');
  $(chinaTown._icon).addClass('shopping');


  //building markers
  var metCathedral = L.marker([53.404865, -2.968655]).addTo(map);
  var livCathedral = L.marker([53.397410, -2.973248]).addTo(map);
  var bombedOutChurch = L.marker([53.401802, -2.9750655]).addTo(map);
  var liverBuild = L.marker([53.405655, -2.996356]).addTo(map);
  var portBuild = L.marker([53.404272, -2.995165]).addTo(map);
  var cunardBuild = L.marker([53.405004, -2.995806]).addTo(map);
  var townhall = L.marker([53.407041, -2.991519]).addTo(map).bindPopup("Liverpool Town Hall is a Grade I listed 18th century building");
  var speke = L.marker([53.336422, -2.873606]).addTo(map).bindPopup("Speke Hall dates from 1530 and has beautiful Tudor architecture");
  $(metCathedral._icon).addClass('buildings');
  $(livCathedral._icon).addClass('buildings');
  $(bombedOutChurch._icon).addClass('buildings');
  $(liverBuild._icon).addClass('buildings');
  $(portBuild._icon).addClass('buildings');
  $(cunardBuild._icon).addClass('buildings');
  $(speke._icon).addClass('buildings family parks');
  $(townhall._icon).addClass('buildings');

  //Beatles markers
  var beatlesStatue = L.marker([53.4044504, -2.996333]).addTo(map);
  var pennyLane = L.marker([53.386859, -2.919551]).addTo(map);
  var beatlesStory = L.marker([53.3992908, -2.9923737]).addTo(map);
  var cavernC = L.marker([53.406384, -2.988037]).addTo(map).bindPopup("The Cavern Club, venue of the Beatles' first performance");
  var eleanor = L.marker([53.406833, -2.986348]).addTo(map).bindPopup("Statue of Eleanor Rigby");
  var forthlin = L.marker([53.369586, -2.897812]).addTo(map).bindPopup("20 Forthlin Road, the childhood home of Paul McCartney");
  var mendips = L.marker([53.377209, -2.881483]).addTo(map).bindPopup("Mendips, the childhood home of John Lennon");
  var dovey = L.marker([53.387122, -2.918702]).addTo(map).bindPopup("Dovedale Towers, where John Lennon performed and Freddie Mercury rented a flat");
  $(pennyLane._icon).addClass('beatle');
  $(beatlesStatue._icon).addClass('beatle');
  $(beatlesStory._icon).addClass('beatle');
  $(cavernC._icon).addClass('beatle');
  $(eleanor._icon).addClass('beatle');
  $(forthlin._icon).addClass('beatle');
  $(mendips._icon).addClass('beatle');
  $(dovey._icon).addClass('beatle');
  

  //football markers
  var anfield = L.marker([53.430802, -2.960885]).addTo(map);
  var goodison = L.marker([53.438767, -2.966299]).addTo(map);
  var lfc1 = L.marker([53.406697, -2.982930]).addTo(map).bindPopup("LFC Club Store, where you can buy official Liverpool merchandise");
  var lfc2 = L.marker([53.404137, -2.987231]).addTo(map).bindPopup("LFC Club Store, where you can buy official Liverpool merchandise");
  var evertontwo = L.marker([53.404000, -2.987290]).addTo(map).bindPopup("Everton Two, the official club store of Everton Football Club");
  $(anfield._icon).addClass('football');
  $(goodison._icon).addClass('football');
  $(lfc1._icon).addClass('football');
  $(lfc2._icon).addClass('football');
  $(evertontwo._icon).addClass('football');

  //museum markers
  var slavery = L.marker([53.401237, -2.993309]).addTo(map).bindPopup("The International Slavery Museum");
  var maritime = L.marker([53.401304, -2.992853]).addTo(map).bindPopup("The Merseyside Maritime Museum");
  var worldM = L.marker([53.409949, -2.981564]).addTo(map).bindPopup("The World Museum and Aquarium");
  var livMus = L.marker([53.402861, -2.995647]).addTo(map).bindPopup("The Museum of Liverpool");
  var portS = L.marker([53.354862, -2.998169]).addTo(map).bindPopup("Port Sunlight Museum & Garden Village");
  var wTrans = L.marker([53.396381, -3.019459]).addTo(map).bindPopup("Wirral Transport Museum & Heritage Tramway");
  var bme = L.marker([53.404986, -2.995735]).addTo(map).bindPopup("The BME tells the story of British Music");
  var spaceP = L.marker([53.409320, -3.017469]).addTo(map).bindPopup("Spaceport planetarium and spacecraft simulator");
  var uBoat = L.marker([53.394988, -3.009580]).addTo(map).bindPopup("U-Boat Story, a real German U-boat");
  $(slavery._icon).addClass('museum');
  $(maritime._icon).addClass('museum');
  $(worldM._icon).addClass('museum family');
  $(livMus._icon).addClass('museum');
  $(portS._icon).addClass('museum');
  $(wTrans._icon).addClass('museum');
  $(bme._icon).addClass('museum');
  $(spaceP._icon).addClass('museum family');
  $(uBoat._icon).addClass('museum family');

  //galleries markers
  var tate = L.marker([53.400869, -2.994512]).addTo(map);
  var bluecoat = L.marker([53.404172, -2.983806]).addTo(map);
  var walker = L.marker([53.410018, -2.979718]).addTo(map);
  $(tate._icon).addClass('galleries');
  $(bluecoat._icon).addClass('galleries buildings');
  $(walker._icon).addClass('galleries');

  //parks markers
  var sefton = L.marker([53.383031, -2.938869]).addTo(map);
  var calderstones = L.marker([53.380142, -2.893929]).addTo(map);
  var ottersPool = L.marker([53.359110, -2.926925]).addTo(map);
  var stanley = L.marker([53.435241, -2.963147]).addTo(map).bindPopup("Stanley Park, right between Anfield and Goodison Park");;
  var ness = L.marker([53.272142, -3.041887]).addTo(map).bindPopup("Ness Botanical Gardens on the Wirral Peninsula");
  var birkenhead = L.marker([53.394065, -3.043569]).addTo(map).bindPopup("Birkenhead Park, which is generally acknowledged to have been the model for New York's Central Park");
  $(sefton._icon).addClass('parks');
  $(calderstones._icon).addClass('parks');
  $(ottersPool._icon).addClass('parks');
  $(stanley._icon).addClass('parks');
  $(ness._icon).addClass('parks');
  $(birkenhead._icon).addClass('parks');

  //add pop-ups 

  //tourist pop-up  
  var boldStreetPopup = "The iconic Bold Street restaurant area";
  boldStreet.bindPopup(boldStreetPopup);

  var larkLanePopup = "Lark Lane is a beautiful bohemian street with restaurants, pubs and shops";
  larkLane.bindPopup(larkLanePopup);

  //Buildings pop-up
  var metCathPopup = "Liverpool Metropolitan Cathedral, with its modern tower";
  metCathedral.bindPopup(metCathPopup);

  var livCathPopup = "Liverpool Cathedral, with its gothic style building and tower";
  livCathedral.bindPopup(livCathPopup);

  var bombedOutChurcPopup = "St. Luke's or 'The Bombed Out Church', site of a WWII bombing";
  bombedOutChurch.bindPopup(bombedOutChurcPopup);

  var liverBuildPopup = "The Royal Liver Building, one of Liverpool's Three Graces";
  liverBuild.bindPopup(liverBuildPopup);

  var cunardBuildPopup = "The Cunard Building, one of Liverpool's Three Graces";
  cunardBuild.bindPopup(cunardBuildPopup);

  var portBuildPopup = "The Port of Liverpool Building, one of Liverpool's Three Graces";
  portBuild.bindPopup(portBuildPopup);

  //Beatles pop-up
  var pennyLanePopup = "Penny Lane, the inspiration behind the Beatles' song";
  pennyLane.bindPopup(pennyLanePopup);

  var beatlesStatPopup = "The Beatles Statue. Take your picture with the Fab Four";
  beatlesStatue.bindPopup(beatlesStatPopup);

  var beatlesStoryPopup = "The Beatles Story, a must-visit museum for any Beatles fan";
  beatlesStory.bindPopup(beatlesStoryPopup);
  
  //Football pop-up
  var anfieldPopup = "Anfield, the home of Liverpool Football Club";
  anfield.bindPopup(anfieldPopup);

  var goodisonPopup = "Goodison Park, the home of Everton Football Club";
  goodison.bindPopup(goodisonPopup);



  //galleries pop-up
  var tatePopup = "Tate Liverpool";
  tate.bindPopup(tatePopup);

  var bluecoatPopup = "The Bluecoat, a Grade I listed arts centre and the oldest building in the city";
  bluecoat.bindPopup(bluecoatPopup);

  var walkerPopup = "Walker Art Gallery";
  walker.bindPopup(walkerPopup);


  //Parks pop-up
  var seftonPopup = "The beautiful 200 acre Sefton Park";
  sefton.bindPopup(seftonPopup);

  var calderPopup = "The beautiful and family-friendly Calderstones Park";
  calderstones.bindPopup(calderPopup);

  var otterPopup = "Otter's Pool park and promenade is great for walking and cycling";
  ottersPool.bindPopup(otterPopup);
*/


  
  
 