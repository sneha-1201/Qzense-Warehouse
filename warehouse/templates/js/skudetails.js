
fetch("https://qdsyp8k532.execute-api.ap-south-1.amazonaws.com/v1/sku_details?secureKey=112@api&truck_id=KA05G9883",{
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

  var vals = JSON.parse(data["body"]);
  
  let quantities = []
  for(vehicle_number in vals){
    console.log(vehicle_number)
    for(item in vals[vehicle_number]){
        console.log(item)
        quantities.push(vals[vehicle_number][item]['quantity'])
    }
  }
  console.log(quantities)
  // console.log(vals["a + b"])
  vehicle_numbers = Object.keys(vals)
  document.getElementById('root').innerHTML=vehicle_numbers[0]
  document.getElementById('root1').innerHTML=quantities[0];
  document.getElementById('root2').innerHTML=quantities[1]; 
  document.getElementById('root3').innerHTML=quantities[2];
});