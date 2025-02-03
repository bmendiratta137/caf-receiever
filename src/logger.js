function sendLog(message) {
    const licenseKey = 'a2214be1c61f636118bc8af0dce6fd25FFFFNRAL';  // Replace with a secure method of storing the key
    const endpointUrl = 'https://log-api.newrelic.com/log/v1';
  
    const logPayload = {
        message: message,
        timestamp: new Date().toISOString()
    };
  
    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': licenseKey
        },
        body: JSON.stringify([logPayload])
    })
    .then(response => {
        if (response.ok) {
            console.log('Log sent successfully');
        } else {
            console.error('Error sending log:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error sending log:', error);
    });
  }

  export default sendLog;