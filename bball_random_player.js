async function randomNbaPlayer() {
    // Value between 0 and 24 for a random player on a given "page"
    var player_num = Math.floor(Math.random() * 25);
    
    // Set page variable to be between 0 and 750, in steps of 25 (the cursor)
    var page = Math.floor(Math.random() * 30)*25;
    
    // Set API URL including cursor info
    var apiUrl = `https://api.balldontlie.io/v1/players?cursor=${page}`
    
    //API call
    const response = await fetch(
        `${apiUrl}`,
        {
            method: 'GET',
            headers: {
                'Authorization':'53f7fae1-47e4-4649-8714-ae58eab679bf'
            }
        });
        if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    const players = await response.json();
    
    // Grab the div element that we'll populate with the information we're
    // pulling from the API
    var outputElement = document.getElementById('bball_player');
    
    // Set the first and last name to variables
    var first_name = players.data[player_num].first_name;
    var last_name = players.data[player_num].last_name;
    
    //Enter a paragraph element and the first/last name variables in the div
    // element.
	outputElement.innerHTML = `<p><span>Today's random player is: ${first_name} ${last_name}!</span></p>`;
	
	// Also return the ID of the player in question
	return players.data[player_num].id;
}