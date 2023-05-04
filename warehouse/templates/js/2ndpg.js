let a=fetch("https://1yxn3bpbf2.execute-api.ap-south-1.amazonaws.com/v1/recent_truck?secureKey=112@api",{
method:'GET',
headers:{
  'Content-Type':'application/json'
},


}).then(response => response.json())

.then((data)=>{
  console.log(data);
  
 // var vals = JSON.parse(data['body'])
  
  //document.getElementById('root').innerHTML=vals['Date'];
});