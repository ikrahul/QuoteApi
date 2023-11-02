function getRandomLine() {
    const randomFileNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number from 1 to 20
    const randomFileName = `Files/quotes_${randomFileNumber}.txt`; // Generate the random file name
    fetch(randomFileName)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const randomIndex = Math.floor(Math.random() * lines.length);
            const randomLine = lines[randomIndex];
            document.getElementById('random-line').textContent = randomLine;
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

window.onload = getRandomLine;
