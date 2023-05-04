for (var i=1; i <= localStorage.length; i++)  {
  console.log(localStorage.getItem(i))
}

var token = localStorage.getItem("items");

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  console.log(localStorage.key( i ))
  console.log( localStorage.getItem( localStorage.key( i ) ) );
}

var Authorization = 'Bearer '+ token.slice(2,-2)
console.log(Authorization)

fetch("http://43.205.91.117:8000/api/trucks_inside/",{
method:'GET',
headers:{
  'Content-Type':'application/json',
  'Authorization': Authorization
},
//body:JSON.stringify({
 // name:'User 1'
//})

}).then(response => response.json())

.then((data)=>{
  console.log(data);
  const entryTime = data.trucks_inside[0].entry_time;
    const truckIdElement = document.getElementById('entry-time');
    truckIdElement.innerHTML = entryTime;
  })

  .catch(error => console.error(error));


  //var truck_number = data['trucks_inside'];
  //console.log(truck_number[0]);


  
  //document.getElementById('root12').innerHTML=vals['truck_id']
  //document.getElementById('root1').innerHTML=quantities[1];
  //document.getElementById('root2').innerHTML=quantities[1]; 
  //document.getElementById('root3').innerHTML=quantities[2];




