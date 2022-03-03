$(function(){

    $.ajax({
        url: './data/data.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.quality; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                    var txt = '<table>'; //table에 담아서
                    txt+='<thead>';
                    txt+='<tr>';
                    txt+='<th scope="col">구분</th>';
                    txt+='<th scope="col">설명</th>';
                    txt+='<th scope="col">주기</th>';
                    txt+='</tr>';
                    txt+='</thead>';
                    txt+='<tbody>';
                    for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $sortation = useData[i].sortation; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $explanation = useData[i].explanation;
                        var $giving = useData[i].giving;
 
                        txt+='<tr>';
                        txt+='<th scope="row">'+$sortation+'</th>';
                        txt+='<td>'+$explanation+'</td>';
                        txt+='<td>'+$giving+'</td>';
                        txt+='</tr>';
                    }
                    txt+='</tbody>';
                    txt +='</table>';
 
                    $('.table').html(txt);

                    
               
            };        
            dataPrint();
        }
    });

    $.ajax({
        url: './data/data.json', //javascript에 xhr.open('GET', 'data/data.json', true);경로 찾기랑 똑같
        dataType: 'json', //데이터 파일종류
        success: function(data){ //success(성공)했다면 데이터를 불러와라, 자동으로 'json 객체배열 데이터'를 매개변수data에 넣어줌 responseObject = JSON.parse(xhr.responseText);랑 똑같
            var useData = data.food; //그래서 바로 
            
            function dataPrint(){ //함수 만들어
                
                    var txt = '<table>'; //table에 담아서
                    txt+='<thead>';
                    txt+='<tr>';
                    txt+='<th scope="col">구분</th>';
                    txt+='<th scope="col">식품군</th>';
                    txt+='</tr>';
                    txt+='</thead>';
                    txt+='<tbody>';
                    for(var i in useData){ //for in문 사용 : 배열 만큼만 돌리는기(for 문 사용해도 괜춘)
                        
                        var $sortation1 = useData[i].sortation1; //변수에 담아둘 수도 있고 그냥 사용도 가능
                        var $foodgroup = useData[i].foodgroup;
 
                        txt+='<tr>';
                        txt+='<th scope="row">'+$sortation1+'</th>';
                        txt+='<td>'+$foodgroup+'</td>';
                        txt+='</tr>';
                    }
                    txt+='<tbody>';
                    txt +='</table>';
 
                    $('.table1').html(txt);
               
            };        
            dataPrint();
        }
    });
     
 });