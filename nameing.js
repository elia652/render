fetch('http://127.0.0.1:5000/') // Use 127.0.0.1 instead of localhost to avoid IPv6 issues
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => window.alert(data)) // Logs the received JSON data
    .catch(error => console.error('Fetch error:', error)); // Handles fetch errors
