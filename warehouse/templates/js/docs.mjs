var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "./gatein.html";
}

function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://43.205.91.117:8000/api/user/login/");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      email: email,
      password: password,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      console.log(objects["token"]["access"])
      if (objects["token"]) {
        let itemsArray = localStorage.getItem('items') ?JSON.parse(localStorage.getItem('items')) : [];
        // localStorage.setItem("jwt", objects["accessToken"]);
        itemsArray.push(objects["token"]["access"]);
        localStorage.setItem('items', JSON.stringify(""));
        localStorage.setItem('items', JSON.stringify(""));
        localStorage.setItem('items', JSON.stringify(itemsArray));
        // caches.open("token").then(cache => {
        //   cache.add(objects["accessToken"]).then(() =>{
        //       console.log("token is added success")
        //   })
      // })
        console.log("set accesstoken");
        Swal.fire({
          text: objects["message"],
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./displayp.html";
          }
        });
      } else {
        Swal.fire({
          text: objects["message"],
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return false;
}
