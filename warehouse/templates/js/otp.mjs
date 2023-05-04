var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "./otp.html";
}

function login() {
  const otp = document.getElementById("otp").value;
  

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://43.205.91.117:8000/api/user/verify_otp/");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      otp: "otp",
      
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects["status"] == "ok") {
        localStorage.setItem("jwt", objects["accessToken"]);
        Swal.fire({
          text: objects["message"],
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./login.html";
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