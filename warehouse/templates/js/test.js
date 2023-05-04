fetch("https://eqjenp9q7b.execute-api.ap-northeast-1.amazonaws.com/v1/post_json",{
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
  
 // var vals = JSON.parse(data['body'])
  
  document.getElementById('root32').innerHTML=data['body'];
});