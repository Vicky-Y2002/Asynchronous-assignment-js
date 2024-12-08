// callbacks.js
document.getElementById('startButton').addEventListener('click', () => {
    simulateDelay(5000, (message) => {
        document.getElementById('result').textContent = message;
    });
});

// Simulate a delay of delayTime milliseconds, then call the callback function
function simulateDelay(delayTime, callback) {
    setTimeout(() => {
        callback("Callback executed after 5 seconds");
    }, delayTime);
}
 // callbacks.js
document.getElementById('startButton').addEventListener('click', () => {
    fetchDataFromAPI((data) => {
        // Display post titles in the result div
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ""; // Clear previous content
        data.forEach(post => {
            const postElement = document.createElement('p');
            postElement.textContent = post.title;
            resultDiv.appendChild(postElement);
        });
    });
});

// Fetch data from JSONPlaceholder API and execute the callback with the data
function fetchDataFromAPI(callback) {
    const url = 'https://dummyjson.com/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data.posts); // Send posts data to the callback function
        })
        .catch(error => {
            document.getElementById('result').textContent = 'Failed to load data.';
            console.error('Error fetching data:', error);
        });
}