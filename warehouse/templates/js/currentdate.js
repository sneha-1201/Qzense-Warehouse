let a=fetch("https://de605uytr3.execute-api.ap-northeast-1.amazonaws.com/qzense/date",{
method:'POST',
headers:{
  'Content-Type':'application/json'
},
//body:JSON.stringify({
 // name:'User 1'
//})

}).then(response => response.json())

.then((data)=>{
  console.log(data);
  
  var vals = JSON.parse(data['body'])
  
  document.getElementById('root').innerHTML=vals['Date'];
});