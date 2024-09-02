// script.js

// Data: List of stations in order
const stations = [
    "PITX",
    "City of Dreams",
    "DFA",
    "Roxas Boulevard",
    "Taft Avenue",
    "Ayala",
    "Buendia",
    "Guadalupe",
    "Ortigas",
    "Santolan",
    "Main Avenue",
    "Nepa Q. Mart",
    "Quezon Avenue",
    "North Avenue",
    "Roosevelt",
    "Kaingin",
    "Balintawak",
    "Bagong Barrio",
    "Monumento"
];

// Data: Fare matrix (Regular and Student fares between stations)
// Example format: fares[origin][destination] = { regular: 15.00, student: 12.00 }
const fares = {
"PITX": {
        "City of Dreams": { regular: 15.00, student: 12.00 },
        "DFA": { regular: 15.00, student: 12.00 },
        "Roxas Boulevard": { regular: 15.00, student: 12.00},
        "Taft Avenue": { regular: 15.00, student: 12.00},
        "Ayala": { regular: 24.00, student: 19.25},
        "Buendia": { regular: 26.50, student: 21.00},
        "Guadalupe": { regular: 31.50, student: 25.25},
        "Ortigas": { regular: 38.00, student: 30.50},
        "Santolan": { regular: 44.75, student: 35.75},
        "Main Avenue": { regular: 46.50, student: 37.25},
        "Nepa Q. Mart": { regular: 51.25, student: 41.00},
        "Quezon Avenue": { regular: 55.50, student: 44.50},
        "North Avenue": { regular: 59.00, student: 47.25},
        "Roosevelt": { regular: 63.50, student: 50.75},
        "Kaingin": { regular: 65.75, student: 52.50},
        "Balintawak": { regular: 67.75, student: 54.25},
        "Bagong Barrio": { regular: 69.50, student: 55.75},
        "Monumento": { regular: 73.00, student: 58.25},
    },
    "City of Dreams": {
        "DFA": { regular: 15.00, student: 12.00 },
        "Roxas Boulevard": { regular: 15.00, student: 12.00},
        "Taft Avenue": { regular: 15.00, student: 12.00},
        "Ayala": { regular: 17.75, student: 14.25},
        "Buendia": { regular: 20.00, student: 16.00},
        "Guadalupe": { regular: 25.00, student: 20.00},
        "Ortigas": { regular: 31.50, student: 25.25},
        "Santolan": { regular: 38.25, student: 30.50},
        "Main Avenue": { regular: 40.00, student: 32.00},
        "Nepa Q. Mart": { regular: 44.75, student: 35.75},
        "Quezon Avenue": { regular: 49.00, student: 39.25},
        "North Avenue": { regular: 52.50, student: 42.00},
        "Roosevelt": { regular: 57.00, student: 45.50},
        "Kaingin": { regular: 59.25, student: 47.50},
        "Balintawak": { regular: 61.25, student: 49.00},
        "Bagong Barrio": { regular: 63.25, student: 50.50},
        "Monumento": { regular: 66.50, student: 53.25},
    },
    "DFA": {
        "Roxas Boulevard": { regular: 15.00, student: 12.00 },
        "Taft Avenue": { regular: 15.00, student: 12.00},
        "Ayala": { regular: 16.25, student: 13.00},
        "Buendia": { regular: 18.50, student: 14.75},
        "Guadalupe": { regular: 23.75, student: 19.00},
        "Ortigas": { regular: 30.25, student: 24.25},
        "Santolan": { regular: 36.75, student: 29.50},
        "Main Avenue": { regular: 38.75, student: 31.00},
        "Nepa Q. Mart": { regular: 43.50, student: 34.75},
        "Quezon Avenue": { regular: 47.75, student: 38.25},
        "North Avenue": { regular: 51.00, student: 40.75},
        "Roosevelt": { regular: 55.50, student: 44.50},
        "Kaingin": { regular: 58.00, student: 46.25},
        "Balintawak": { regular: 60.00, student: 48.00},
        "Bagong Barrio": { regular: 61.75, student: 49.50},
        "Monumento": { regular: 65.25, student: 52.00},
    },
    "Roxas Boulevard": {
        "Taft Avenue": { regular: 15.00, student: 12.00},
        "Ayala": { regular: 15.00, student: 12.00},
        "Buendia": { regular: 15.75, student: 12.75},
        "Guadalupe": { regular: 21.00, student: 16.75},
        "Ortigas": { regular: 27.50, student: 22.00},
        "Santolan": { regular: 34.25, student: 27.25},
        "Main Avenue": { regular: 36.00, student: 28.75},
        "Nepa Q. Mart": { regular: 40.75, student: 32.50},
        "Quezon Avenue": { regular: 45.00, student: 36.00},
        "North Avenue": { regular: 48.50, student: 38.75},
        "Roosevelt": { regular: 53.00, student: 42.25},
        "Kaingin": { regular: 55.25, student: 44.25},
        "Balintawak": { regular: 57.25, student: 45.75},
        "Bagong Barrio": { regular: 59.00, student: 47.25},
        "Monumento": { regular: 62.50, student: 50.00},
    },
    "Taft Avenue": {
        "Ayala": { regular: 15.00, student: 12.00},
        "Buendia": { regular: 15.00, student: 12.00},
        "Guadalupe": { regular: 18.75, student: 15.00},
        "Ortigas": { regular: 25.25, student: 20.00},
        "Santolan": { regular: 31.75, student: 25.50},
        "Main Avenue": { regular: 33.75, student: 27.00},
        "Nepa Q. Mart": { regular: 38.50, student: 30.75},
        "Quezon Avenue": { regular: 42.75, student: 34.25},
        "North Avenue": { regular: 46.00, student: 36.75},
        "Roosevelt": { regular: 50.50, student: 40.50},
        "Kaingin": { regular: 53.00, student: 42.25},
        "Balintawak": { regular: 55.00, student: 44.00},
        "Bagong Barrio": { regular: 56.75, student: 45.50},
        "Monumento": { regular: 60.25, student: 48.00},

    },
    "Ayala": {
        "Buendia": { regular: 15.00, student: 12.00},
        "Guadalupe": { regular: 15.00, student: 12.00},
        "Ortigas": { regular: 15.50, student: 12.50},
        "Santolan": { regular: 22.25, student: 17.75},
        "Main Avenue": { regular: 24.00, student: 19.25},
        "Nepa Q. Mart": { regular: 29.00, student: 23.00},
        "Quezon Avenue": { regular: 33.25, student: 26.50},
        "North Avenue": { regular: 36.50, student: 29.25},
        "Roosevelt": { regular: 41.00, student: 32.75},
        "Kaingin": { regular: 43.50, student: 34.75},
        "Balintawak": { regular: 45.25, student: 36.25},
        "Bagong Barrio": { regular: 47.25, student: 37.75},
        "Monumento": { regular: 50.50, student: 40.50},
    },
    "Buendia": {
        "Guadalupe": { regular: 15.00, student: 12.00},
        "Ortigas": { regular: 15.00, student: 12.00},
        "Santolan": { regular: 20.00, student: 16.00},
        "Main Avenue": { regular: 21.75, student: 17.50},
        "Nepa Q. Mart": { regular: 26.50, student: 21.25},
        "Quezon Avenue": { regular: 30.75, student: 24.75},
        "North Avenue": { regular: 34.25, student: 27.50},
        "Roosevelt": { regular: 38.75, student: 31.00},
        "Kaingin": { regular: 41.25, student: 33.00},
        "Balintawak": { regular: 43.00, student: 34.50},
        "Bagong Barrio": { regular: 45.00, student: 36.00},
        "Monumento": { regular: 48.25, student: 38.75},
    },
    "Guadalupe": {
        "Ortigas": { regular: 15.00, student: 12.00},
        "Santolan": { regular: 15.00, student: 12.00},
        "Main Avenue": { regular: 16.75, student: 13.25},
        "Nepa Q. Mart": { regular: 21.50, student: 17.25},
        "Quezon Avenue": { regular: 25.75, student: 20.50},
        "North Avenue": { regular: 29.00, student: 23.25},
        "Roosevelt": { regular: 33.75, student: 27.00},
        "Kaingin": { regular: 36.00, student: 28.75},
        "Balintawak": { regular: 38.00, student: 30.25},
        "Bagong Barrio": { regular: 39.75, student: 31.75},
        "Monumento": { regular: 43.25, student: 34.50},
    },
    "Ortigas": {
        "Santolan": { regular: 15.00, student: 12.00},
        "Main Avenue": { regular: 15.00, student: 12.00},
        "Nepa Q. Mart": { regular: 15.00, student: 12.00},
        "Quezon Avenue": { regular: 19.25, student: 15.50},
        "North Avenue": { regular: 22.75, student: 18.25},
        "Roosevelt": { regular: 27.25, student: 21.75},
        "Kaingin": { regular: 29.50, student: 23.75},
        "Balintawak": { regular: 31.50, student: 25.25},
        "Bagong Barrio": { regular: 33.25, student: 26.75},
        "Monumento": { regular: 36.75, student: 29.50},
    },
    "Santolan": {
        "Main Avenue": { regular: 15.00, student: 12.00},
        "Nepa Q. Mart": { regular: 15.00, student: 12.00},
        "Quezon Avenue": { regular: 15.00, student: 12.00},
        "North Avenue": { regular: 16.00, student: 12.75},
        "Roosevelt": { regular: 20.50, student: 16.50},
        "Kaingin": { regular: 22.75, student: 18.25},
        "Balintawak": { regular: 24.75, student: 19.75},
        "Bagong Barrio": { regular: 26.75, student: 21.25},
        "Monumento": { regular: 30.00, student: 24.00},
    },
    "Main Avenue": {
        "Nepa Q. Mart": { regular: 15.00, student: 12.00},
        "Quezon Avenue": { regular: 15.00, student: 12.00},
        "North Avenue": { regular: 15.00, student: 12.00},
        "Roosevelt": { regular: 18.75, student: 15.00},
        "Kaingin": { regular: 21.00, student: 16.75},
        "Balintawak": { regular: 23.00, student: 18.50},
        "Bagong Barrio": { regular: 25.00, student: 20.00},
        "Monumento": { regular: 28.25, student: 22.50},
    },
    "Nepa Q. Mart": {
        "Quezon Avenue": { regular: 15.00, student: 12.00},
        "North Avenue": { regular: 15.00, student: 12.00},
        "Roosevelt": { regular: 15.00, student: 12.00},
        "Kaingin": { regular: 16.25, student: 13.00},
        "Balintawak": { regular: 18.25, student: 14.50},
        "Bagong Barrio": { regular: 20.00, student: 16.00},
        "Monumento": { regular: 23.50, student: 18.75},
    },
    "Quezon Avenue": {
        "North Avenue": { regular: 15.00, student: 12.00},
        "Roosevelt": { regular: 15.00, student: 12.00},
        "Kaingin": { regular: 15.00, student: 12.00},
        "Balintawak": { regular: 15.00, student: 12.00},
        "Bagong Barrio": { regular: 15.75, student: 12.75},
        "Monumento": { regular: 19.25, student: 15.25},
    },
    "North Avenue": {
        "Roosevelt": { regular: 15.00, student: 12.00},
        "Kaingin": { regular: 15.00, student: 12.00},
        "Balintawak": { regular: 15.00, student: 12.00},
        "Bagong Barrio": { regular: 15.00, student: 12.00},
        "Monumento": { regular: 15.75, student: 12.75},
    },
    "Roosevelt": {
        "Kaingin": { regular: 15.00, student: 12.00},
        "Balintawak": { regular: 15.00, student: 12.00},
        "Bagong Barrio": { regular: 15.00, student: 12.00},
        "Monumento": { regular: 15.00, student: 12.00},
    },
    "Kaingin": {
        "Balintawak": { regular: 15.00, student: 12.00},
        "Bagong Barrio": { regular: 15.00, student: 12.00},
        "Monumento": { regular: 15.00, student: 12.00},
    },
    "Balintawak": {
        "Bagong Barrio": { regular: 15.00, student: 12.00},
        "Monumento": { regular: 15.00, student: 12.00},
    },
    "Bagong Barrio": {
        "Monumento": { regular: 15.00, student: 12.00},
    },
};

// Initialize elements
const originSelect = document.getElementById('origin');
const destinationSelect = document.getElementById('destination');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

// Populate Origin Select
function populateOriginSelect() {
    stations.forEach(station => {
        const option = document.createElement('option');
        option.value = station;
        option.text = station;
        originSelect.add(option);
    });
}

// Populate Destination Select based on selected Origin
function populateDestinationSelect(selectedOrigin) {
    // Clear previous options
    destinationSelect.innerHTML = '<option value="">Choose your destination</option>';
    
    // Get index of selected origin
    const originIndex = stations.indexOf(selectedOrigin);

    // If origin not found, disable destination select and button
    if (originIndex === -1) {
        destinationSelect.disabled = true;
        calculateBtn.disabled = true;
        return;
    }

    // Populate destinations: stations after the origin
    const availableDestinations = stations.slice(originIndex + 1);
    
    availableDestinations.forEach(station => {
        const option = document.createElement('option');
        option.value = station;
        option.text = station;
        destinationSelect.add(option);
    });

    // Enable destination select
    destinationSelect.disabled = false;
    calculateBtn.disabled = true;
    resultDiv.textContent = '';
}

// Calculate and display fare
function calculateFare() {
    const origin = originSelect.value;
    const destination = destinationSelect.value;

    if (origin === "" || destination === "") {
        resultDiv.textContent = 'Please select both origin and destination.';
        return;
    }

    // Get fare from fare matrix
    const fareInfo = fares[origin]?.[destination];

    if (fareInfo) {
        resultDiv.innerHTML = `   
        <strong>${origin} to ${destination}</strong><br><br>
            Regular: ₱${fareInfo.regular.toFixed(2)}<br>
            Student: ₱${fareInfo.student.toFixed(2)}
        `;
    } else {
        resultDiv.textContent = 'Fare information not available for this route.';
    }
}


// Event Listeners
originSelect.addEventListener('change', () => {
    const selectedOrigin = originSelect.value;
    populateDestinationSelect(selectedOrigin);
    resultDiv.textContent = 'Now your destination';
});

destinationSelect.addEventListener('change', () => {
    if (destinationSelect.value !== "") {
        calculateBtn.disabled = false;
        resultDiv.textContent = 'Tap Calculate';
    } else {
        calculateBtn.disabled = true;
    }
});

calculateBtn.addEventListener('click', calculateFare);

// Initialize app
populateOriginSelect();