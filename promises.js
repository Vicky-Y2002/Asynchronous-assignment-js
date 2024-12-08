 document.getElementById('fetchData').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...'; // Show loading text

    // Create a promise to fetch data
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 100); // Simulate slight delay for better user experience
    });

    // Handle promise result
    fetchData.then(data => {
        resultDiv.textContent = JSON.stringify(data.posts.slice(0, 5), null, 2); // Display first 5 posts
    }).catch(error => {
        resultDiv.textContent = 'Error: ' + error.message; // Display error message
    });
});
 document.getElementById('fetchData').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...'; // Show loading text

    // Create a promise with a timeout (5 seconds)
    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out.');
        }, 5000); // 5 seconds timeout

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout); // Clear the timeout if data is fetched
                resolve(data);
            })
            .catch(error => {
                clearTimeout(timeout); // Clear the timeout if error occurs
                reject(error);
            });
    });

    // Handle promise result
    fetchData.then(data => {
        resultDiv.textContent = JSON.stringify(data.posts.slice(0, 5), null, 2); // Display first 5 posts
    }).catch(error => {
        resultDiv.textContent = 'Error: ' + error; // Display error message
    });
});