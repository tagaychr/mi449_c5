function addDetails() {
    const detailsDiv = document.querySelector('.details');
    if (detailsDiv) {
        console.log('found');
      const points = Math.floor(Math.random() * 100); // Random points
      const username = 'User'; // Random username
      const hoursAgo = Math.floor(Math.random() * 24); // Random hours ago
      const comments = Math.floor(Math.random() * 50); // Random comments
      
      const detailsText = `${points} points by ${username} ${hoursAgo} hours ago | hide | ${comments} comments`;
      const detailsParagraph = document.createElement('p');
      detailsParagraph.textContent = detailsText;
      
      detailsDiv.appendChild(detailsParagraph);
    }
  }
  
  // Call the function to add details when needed
  addDetails();
  