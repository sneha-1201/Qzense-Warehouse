fetch("https://1wowjpx8fd.execute-api.ap-south-1.amazonaws.com/v1/trucks_inside_details?secureKey=112@api",{
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
 //let vals = JSON.parse(data["body"])

 let trucks
 let trucks_number=[]
let vals = JSON.parse(data["body"])
let trucks_inside = vals['trucks_inside']
for (trucks in trucks_inside) {
    for (let truck_number in trucks_inside[trucks]) {
        trucks_number.push(truck_number)}
}



  //console.log (vals);
  

  //console.log(number_of_trucks)
  // console.log(vals["a + b"])
  //trucks_inside = Object.keys(vals);
 // document.getElementById('root13').innerHTML=vals["trucks_inside"];

  //document.getElementById('root13').innerHTML=trucks_number[0];
  //document.getElementById('root13').innerHTML=(JSON.stringify(data["body"]));
  //document.getElementById('root13').innerHTML=trucks_number[0];
  
  document.getElementById('root14').innerHTML=vals["number_of_trucks"];
  //document.getElementById('root15').innerHTML=trucks_number[1];

   
  // document.getElementById('root14').innerHTML=trucks_inside[1]; 
   //document.getElementById('root3').innerHTML=trucks_inside[2];
});