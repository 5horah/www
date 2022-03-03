// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.55034044913384, 127.1741832706955);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"(주)세스코"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "(주)세스코 서울시 강동구 상일로 10길 46 세스코 터치센터"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

