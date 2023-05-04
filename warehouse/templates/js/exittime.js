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

fetch("http://43.205.91.117:8000/api/exit_time/",{
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
  const exitTime = data.exit_time;

          // Create a new <p> element
          const p = document.createElement("p");

          // Set the text content of the <p> element to the exit time
          p.textContent = "Exit Time: " + exitTime;

          // Append the <p> element to the page
          document.getElementById("exit-time").appendChild(p);
        })
        .catch(error => console.error(error));
 