var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');
var s6 = document.getElementById('s6');

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.


function ajax_call(){
  //alert(xhr.responseText);
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.

    var newContent = '';
    
    newContent = '<table>';
    newContent += '<tbody>';
    newContent += '<tr><th>해충명</th><th>학술명</th><th>특징</th><th>생활사</th></tr>';    

    for (var i = 0; i < responseObject.past.length; i++) {
      
      newContent += '<tr>';
      newContent += '<td>'+ responseObject.past[i].name+'</td>';
      newContent += '<td>'+ responseObject.past[i].ename + '</td>';    
      newContent += '<td>'+ responseObject.past[i].characteristics + '</td>';    
      newContent += '<td>'+ responseObject.past[i].life + '</td>';   
      newContent += '</tr>'; 
        
    }
    
    newContent += '</tbody>';
    newContent += '</table>';
 
    document.getElementById('table1').innerHTML = newContent;

}

xhr.onload = function() {                       // When readystate changes
   ajax_call(1);
   s1.style.borderColor = "rgba(25, 121, 189, 0.5)";

};

xhr.open('GET', 'pastdata/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다


s1.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.5)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.0)";


    xhr.onload = function() {                       // When readystate changes
    ajax_call(1);
        
};

xhr.open('GET', 'pastdata/data.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

s2.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.5)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.0)";
    xhr.onload = function() {                       // When readystate changes
    ajax_call(2);
        
};

xhr.open('GET', 'pastdata/data2.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

s3.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.5)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.0)";
    xhr.onload = function() {                       // When readystate changes
    ajax_call(3);
        
};

xhr.open('GET', 'pastdata/data3.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}

s4.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.5)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.0)";
    xhr.onload = function() {                       // When readystate changes
    ajax_call(4);
        
};

xhr.open('GET', 'pastdata/data4.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}
s5.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.5)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.0)";
    xhr.onload = function() {                       // When readystate changes
    ajax_call(5);
        
};

xhr.open('GET', 'pastdata/data5.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}
s6.onclick = function(){
    s1.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s2.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s3.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s4.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s5.style.borderColor = "rgba(25, 121, 189, 0.0)";
    s6.style.borderColor = "rgba(25, 121, 189, 0.5)";
    xhr.onload = function() {                       // When readystate changes
    ajax_call(6);
        
};

xhr.open('GET', 'pastdata/data6.json', true);        // 요청을 준비한다.
xhr.send(null);     
    
}





