fetch('games.json')
    .then(response => response.json())
    .then(data => {
        let gameContainer = document.getElementById('game-list');
        let carouselInner = document.querySelector('#popularGamesCarousel .carousel-inner');

        // Populate the carousel with the first 3 games
        data.games.slice(0, 3).forEach((game, index) => {
            let carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <img src="${game.image}" class="d-block w-100" alt="${game.title}">
            `;
            carouselInner.appendChild(carouselItem);
        });

        // Populate the featured game cards
        data.games.forEach(game => {
            let gameCard = document.createElement('div');
            gameCard.className = 'col-md-4 mb-4';
            gameCard.innerHTML = `
                <div class="card game-card bg-dark text-white">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">${game.description}</p>
                        <p class="card-text text-success"><strong>${game.price}</strong></p>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            `;
            gameContainer.appendChild(gameCard);
        });
    })
    .catch(error => console.error('Error fetching game data:', error));
