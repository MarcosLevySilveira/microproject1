// Get references to the buttons in the HTML
const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

// Function using Fetch API to get employee data
function getDataFetch() {
    const apiLink = 'http://localhost:3000/api/employees'; // URL for employees.json
    
    // Fetch data from the API
    fetch(apiLink)
        .then(response => {
            if (!response.ok) throw new Error("Error in the API response"); // Error handling if the response is not OK
            return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
            displayEmployeeData(data); // Call the function to display employee data
        })
        .catch(error => {
            console.error("Error fetching data:", error); // Log the error
            document.getElementById("data").innerHTML = "<p>Error loading employee data</p>"; // Display error message in the DOM
        });
}

// Function using async/await to get band data
async function getDataAsync() {
    const apiLink = 'http://localhost:3000/api/bands'; // URL for rockbands.json
    
    try {
        const response = await fetch(apiLink); // Await fetch request for band data
        if (!response.ok) throw new Error("Error in the API response"); // Error handling if the response is not OK
        
        const data = await response.json(); // Await parsing of the JSON data
        displayBandData(data); // Call the function to display band data
    } catch (error) {
        console.error("Error fetching data:", error); // Log the error
        document.getElementById("data").innerHTML = "<p>Error loading band data</p>"; // Display error message in the DOM
    }
}

// Function to display employee data on the page
function displayEmployeeData(data) {
    let output = "<ul>"; // Start an unordered list
    
    // Loop through each employee in the data
    data.forEach(employee => {
        output += `<li><strong>ID:</strong> ${employee.id}</li>`; // Display employee ID
        output += `<li><strong>Name:</strong> ${employee.first_name} ${employee.last_name}</li>`; // Display employee name
        output += `<li><strong>Email:</strong> ${employee.email}</li>`; // Display employee email
        output += `<li><strong>Gender:</strong> ${employee.gender}</li>`; // Display employee gender
        output += `<li><strong>Job Title:</strong> ${employee.job_title}</li>`; // Display employee job title
        output += "<br>"; // Add a line break for better formatting
    });
    
    output += "</ul>"; // Close the unordered list
    document.getElementById("data").innerHTML = output; // Set the HTML content of the "data" element
}

// Function to display band data on the page
function displayBandData(data) {
    let output = "<ul>"; // Start an unordered list
    
    // Loop through each band in the data
    data.forEach(band => {
        output += `<li><strong>ID:</strong> ${band.id}</li>`; // Display band ID
        output += `<li><strong>Name:</strong> ${band.name}</li>`; // Display band name
        output += `<li><strong>Country:</strong> ${band.country}</li>`; // Display band country
        output += `<li><strong>Formed In:</strong> ${band.formed_in}</li>`; // Display year the band was formed
        output += `<li><strong>Genre:</strong> ${band.genre}</li>`; // Display band genre
        output += "<br>"; // Add a line break for better formatting
    });
    
    output += "</ul>"; // Close the unordered list
    document.getElementById("data").innerHTML = output; // Set the HTML content of the "data" element
}

// Event listener for the Fetch button to fetch employee data
getFetchBtn.addEventListener('click', getDataFetch);

// Event listener for the Async button to fetch band data
getAsyncBtn.addEventListener('click', getDataAsync);
