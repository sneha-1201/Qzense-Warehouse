const uploadFile = async (file) => {
    const url = 'http://43.205.91.117:8000/api/text_rekognition/';
    const formData = new FormData();
    formData.append('picture', file);

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data;
    console.log(data);
    
  };
  
      
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const result = await uploadFile(file);
    
    console.log(result);  

    window.alert("Please wait !")

    var messageElement = document.getElementById("message");
   

    messageElement.textContent = ("Truck Number : "+result["text"]);
   
      
};

    const fileInput = document.querySelector('#picture');
    fileInput.addEventListener('change', handleFileUpload);