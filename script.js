document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let searchTerm = document.getElementById('search').value.toLowerCase();

    // Your search functionality goes here
    // For example, you can filter the car grid based on the search term

    let carItems = document.getElementsByClassName('car-item');
    let anyMatch = false; // Add this variable to keep track of whether any car items matched the search term

    for (let i = 0; i < carItems.length; i++) {
        let carName = carItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let carBrand = carItems[i].getElementsByTagName('img')[0].alt.toLowerCase();

        if (carName.includes(searchTerm) || carBrand.includes(searchTerm)) {
            carItems[i].style.display = 'block';
            anyMatch = true; // Set this variable to true if any car items match the search term
        } else {
            carItems[i].style.display = 'none';
        }
    }

    // If no car items matched the search term, hide all the car items
    if (!anyMatch) {
        for (let i = 0; i < carItems.length; i++) {
            carItems[i].style.display = 'none';
        }
    }
