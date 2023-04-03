// Get client IP address using a third-party API
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById("ip_address").innerHTML = data.ip;
      })
      .catch(error => console.error(error));
 
