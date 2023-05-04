const authToken = "YOUR_AUTH_TOKEN_HERE";

const postData = {
  // Your POST data here
};

fetch('https://example.com/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  },
  body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
