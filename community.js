// Fetch the community data
fetch('community.json')
    .then(response => response.json())
    .then(data => {
        let threadContainer = document.getElementById('discussionThreads');

        // Loop through each thread
        data.threads.forEach(thread => {
            let threadCard = document.createElement('div');
            threadCard.className = 'card mb-4';

            // Thread content
            threadCard.innerHTML = `
                <div class="card-header">
                    <h5 class="card-title">${thread.title}</h5>
                    <p class="card-text">Posted by <strong>${thread.user}</strong> on ${thread.date}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">${thread.content}</p>
                    <h6>Replies:</h6>
                    <div class="list-group">
                        <!-- Replies will be dynamically inserted here -->
                    </div>
                </div>
            `;

            // Add the replies to the thread
            let repliesContainer = threadCard.querySelector('.list-group');
            thread.replies.forEach(reply => {
                let replyItem = document.createElement('div');
                replyItem.className = 'list-group-item';
                replyItem.innerHTML = `
                    <p><strong>${reply.user}</strong> on ${reply.date}</p>
                    <p>${reply.content}</p>
                `;
                repliesContainer.appendChild(replyItem);
            });

            // Append the thread card to the container
            threadContainer.appendChild(threadCard);
        });
    })
    .catch(error => console.error('Error fetching community data:', error));
