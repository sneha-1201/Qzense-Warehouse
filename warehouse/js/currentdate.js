fetch('https://7pz5231v99.execute-api.ap-northeast-1.amazonaws.com/test/today_date')
  .then((response) => response.json())
  .then((data) => console.log(data));


  // Example POST method implementation:
async function postData(url = 'https://7pz5231v99.execute-api.ap-northeast-1.amazonaws.com/test/today_date', data = {}) {
  // Default options are marked with *
  const response = await fetch('https://7pz5231v99.execute-api.ap-northeast-1.amazonaws.com/test/today_date', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://7pz5231v99.execute-api.ap-northeast-1.amazonaws.com/test/today_date', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
