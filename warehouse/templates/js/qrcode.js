let a=fetch("https://1wowjpx8fd.execute-api.ap-south-1.amazonaws.com/v1/trucks_inside_details?secureKey=112@api",{
method:'GET',
headers:{
  'Content-Type':'application/json'
},
//body:JSON.stringify({
 // name:'User 1'
//})

}).then(response => response.json())

.then((data)=>{
  console.log(data);
});