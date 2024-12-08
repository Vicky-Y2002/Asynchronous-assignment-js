 document.getElementById('fetchData').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...'; // Show loading text

    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data.posts.slice(0, 5), null, 2); // Display first 5 posts
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error.message; // Display error message
    }
});
 document.getElementById('fetchData').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...'; // Show loading text

    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject('Operation timed out.'), 5000); // Timeout after 5 seconds
    });

    try {
        const response = await Promise.race([fetch('https://dummyjson.com/posts'), timeout]);
        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data.posts.slice(0, 5), null, 2); // Display first 5 posts
    } catch (error) {
        resultDiv.textContent = 'Error: ' + error; // Display error message
    }
});