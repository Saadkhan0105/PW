// Function to make the AJAX request
function fetchUserNames() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL /users
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    // Set up the callback function for when the request completes
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            var users = JSON.parse(xhr.responseText);

            // Log the list of user names to the console
            console.log("User names:");
            users.forEach(function(user) {
                console.log(user.name);
            });

            // Output the list of user names to the browser
            var output = document.getElementById('output');
            output.innerHTML = '';
            users.forEach(function(user) {
                var li = document.createElement('li');
                li.textContent = user.name;
                output.appendChild(li);
            });
        } else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    };

    // Send the request
    xhr.send();
}

// Set up the event listener for the button click
document.getElementById('fetchButton').addEventListener('click', fetchUserNames);
