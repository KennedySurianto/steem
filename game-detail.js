// Fetching the URL parameter to find the selected game
const urlParams = new URLSearchParams(window.location.search);
const gameTitle = urlParams.get('game');

// Fetch the game data
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        // Find the game by title
        const game = data.games.find(game => game.title === gameTitle);

        if (game) {
            // Display the game details on the page
            document.getElementById('gameTitle').innerText = game.title;
            document.getElementById('gameImage').src = game.image;
            document.getElementById('gameDescription').innerText = game.description;
            document.getElementById('gamePrice').innerText = game.price;
        } else {
            // Handle the case where the game isn't found
            document.getElementById('gameTitle').innerText = 'Game not found';
        }
    })
    .catch(error => console.error('Error fetching game data:', error));
