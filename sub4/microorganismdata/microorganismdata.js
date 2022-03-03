$(function(){

    $.ajax({
        url: './microorganismdata/microorganismdata.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.virus; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                    var txt = '<table>'; //table에 담아서
                    txt+='<tbody>';
                    txt+='<tr>';
                    txt+='<th>병명</th>';
                    txt+='<th>균주</th>';
                    txt+='<th>증세</th>';
                    txt+='<th>발병</th>';
                    txt+='<th>전염기간</th>';
                    txt+='<th>전염경로</th>';
                    txt+='</tr>';
                    for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $name = useData[i].name; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $strain = useData[i].strain;
                        var $symptoms = useData[i].symptoms;
                        var $outbreak = useData[i].outbreak;
                        var $period = useData[i].period;
                        var $route = useData[i].route;
 
                        txt+='<tr>';
                        txt+='<td>'+$name+'</td>';
                        txt+='<td>'+$strain+'</td>';
                        txt+='<td>'+$symptoms+'</td>';
                        txt+='<td>'+$outbreak+'</td>';
                        txt+='<td>'+$period+'</td>';
                        txt+='<td>'+$route+'</td>';
                        txt+='</tr>';
                    }
                    txt+='</tbody>';
                    txt +='</table>';
 
                    $('.virus_table').html(txt);

                    
               
            };        
            dataPrint();
        }
    });

    $.ajax({
        url: './microorganismdata/microorganismdata.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.bacteria; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                    var txt = '<table>'; //table에 담아서
                    txt+='<tbody>';
                    txt+='<tr>';
                    txt+='<th>원인균</th>';
                    txt+='<th>증세</th>';
                    txt+='<th>잠복기</th>';
                    txt+='<th>전염경로</th>';
                    txt+='</tr>';
                    for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $name = useData[i].name; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $symptoms = useData[i].symptoms;
                        var $period = useData[i].period;
                        var $route = useData[i].route;
 
                        txt+='<tr>';
                        txt+='<td>'+$name+'</td>';
                        txt+='<td>'+$symptoms+'</td>';
                        txt+='<td>'+$period+'</td>';
                        txt+='<td>'+$route+'</td>';
                        txt+='</tr>';
                    }
                    txt+='</tbody>';
                    txt +='</table>';
 
                    $('.bacteria_table').html(txt);
            };        
            dataPrint();
        }
    });
    $.ajax({
        url: './microorganismdata/microorganismdata.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.control; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                    var txt = '<table>'; //table에 담아서
                    txt+='<tbody>';
                    txt+='<tbody>';
                    txt+='<tr>';
                    txt+='<th>미생물</th>';
                    txt+='<th>정의</th>';
                    txt+='<th>제거</th>';
                    txt+='<th>방법</th>';
                    txt+='<th>적용</th>';
                    txt+='</tr>';

                    for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $name = useData[i].name; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $definition = useData[i].definition;
                        var $removal = useData[i].removal;
                        var $way = useData[i].way;
                        var $application = useData[i].application;
 
                        txt+='<tr>';
                        txt+='<td>'+$name+'</td>';
                        txt+='<td>'+$definition+'</td>';
                        txt+='<td>'+$removal+'</td>';
                        txt+='<td>'+$way+'</td>';
                        txt+='<td>'+$application+'</td>';
                        txt+='</tr>';
                    }
                    txt+='</tbody>';
                    txt +='</table>';
 
                    $('.control_table').html(txt);
            };        
            dataPrint();
        }
    });
    $.ajax({
        url: './microorganismdata/microorganismdata.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.way; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                var txt = '<table>'; //table에 담아서
                txt+='<tbody>';
                txt+='<tbody>';
                txt+='<tr>';
                txt+='<th>방식</th>';
                txt+='<th>방법</th>';
                txt+='<th>제거</th>';
                txt+='</tr>';
                for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $name = useData[i].name; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $waytext = useData[i].waytext;
                        var $removal = useData[i].removal;
 
                        txt+='<tr>';
                        txt+='<td>'+$name+'</td>';
                        txt+='<td>'+$waytext+'</td>';
                        txt+='<td>'+$removal+'</td>';
                        txt+='</tr>';
                    }
                    txt+='</tbody>';
                    txt +='</table>';
 
                    $('.way_table').html(txt);
            };        
            dataPrint();
        }
    });
     
 });