// Importing the necessary modules for file system operations and making HTTP requests
const fs = require('fs');
const request = require('request');

// Retrieving the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Making an HTTP request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error); // Displaying an error message if there's an error with the request
    return;
  }

  // Writing the downloaded content to a file
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.log('Error saving the file:', err); // Displaying an error message if there's an error while saving the file
      return;
    }

    // Retrieving the size of the saved file
    const fileSize = fs.statSync(filePath).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`); // Displaying a success message with the file size and path
  });
});






