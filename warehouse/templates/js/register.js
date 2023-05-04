var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = "./login.html";
}

function login() {
  const email = document.getElementById("email").value;
  const FirstName = document.getElementById("firstname").value;
  const LastName = document.getElementById("lastname").value;
  const PhoneNo = document.getElementById("phone").value;
  const password1 = document.getElementById("password").value;
  const cpassword = document.getElementById("confirmpassword").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://43.205.91.117:8000/api/user/register/");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      email: email,
      first_name: FirstName,
      last_name: LastName,
      phone_number: PhoneNo,
      password: password1,
      password2: cpassword
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
  return true;
}
