// Intermediate JavaScript

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Display menu items
    displayMenuItems(menu);
}

// Function to display menu items
function displayMenuItems(menu) {
    // Get references to HTML elements
    const menuContainer = document.getElementById('menu');
    const orderList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    let total = 0;

    // Loop through each category in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) { // Ensure category is a direct property of menu
            // Create an h2 element to represent the category heading
            const categoryHeading = document.createElement('h2');
            categoryHeading.textContent = category; // Set the text content of the heading to the category name
            menuContainer.appendChild(categoryHeading); // Append the heading to the menu container

            // Create a div element to hold the items in the category
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category'); // Optionally, add a class for styling

            // Create an unordered list to hold the items in the category
            const itemList = document.createElement('ul');

            // Loop through each item in the category
            for (const itemData of menu[category]) {
                // Extract item name and price from the itemData object
                const item = itemData.name;
                const price = itemData.price;

                // Create list item for each item
                const listItem = document.createElement('li');
                listItem.textContent = item; // Set the text content of the list item to the item name

                // Add event listener to the list item for adding the item to the order
                listItem.addEventListener('click', function() {
                    addToOrder(item, price);
                });

                itemList.appendChild(listItem); // Append the list item to the list of items
            }

            // Append the list of items to the category div
            categoryDiv.appendChild(itemList);

            // Append the category div to the menu container
            menuContainer.appendChild(categoryDiv);
        }
    }

    // Callback function for adding an item to the order
    function addToOrder(item, price) {
        // Create list item for the order
        const orderItem = document.createElement('li');
        orderItem.textContent = `${item}`; // Set the text content of the order item to the item name
        orderList.appendChild(orderItem); // Append the order item to the order list

        // Update the total price
        total += price;

        // Update the text content of the order total element with the new total
        orderTotalElement.textContent = total > 0 ? `${total.toFixed(2)}` : '0.00';

        // Add event listener for single click to remove the item
        orderItem.addEventListener('click', function() {
            removeOrderItem(orderItem, price);
        });
    }

    // Callback function to remove an item from the order
    function removeOrderItem(orderItem, price) {
        // Remove the order item from the order list
        orderItem.remove();

        // Subtract the price of the removed item from the total
        total -= price;

        // Update the text content of the order total element with the new total
        orderTotalElement.textContent = total > 0 ? `${total.toFixed(2)}` : '0.00';
    }
}

// Example menu object
const menu = {
    "Starters": [
        { name: "Bruschetta", price: 8.99 },
        { name: "Calamari", price: 10.99 },
        { name: "Caprese Salad", price: 9.99 }
    ],
    "Main Courses": [
        { name: "Spaghetti Carbonara", price: 14.99 },
        { name: "Margherita Pizza", price: 12.99 },
        { name: "Grilled Salmon", price: 18.99 }
    ],
    "Desserts": [
        { name: "Tiramisu", price: 7.99 },
        { name: "Cannoli", price: 6.99 },
        { name: "Gelato", price: 5.99 }
    ]
};

// Call the function to initialize the menu system
initMenuSystem(menu);




// Intermediate JavaScript

// Summary:
// This script provides functionality to display a menu system on a webpage. 
// It initializes the menu system by calling the initMenuSystem function with a menu object as a parameter.
// The displayMenuItems function is responsible for rendering the menu items dynamically based on the provided menu object.
// It creates headings for each category and lists the items under their respective categories.
// Users can click on menu items to add them to an order list, and the total order cost is updated in real-time.
// The script ensures that menu items are displayed clearly and intuitively, enhancing the user experience.

// Details:
// The initMenuSystem function initializes the menu system by calling displayMenuItems with the menu object.

// The displayMenuItems function renders the menu items by dynamically creating HTML elements.
// It gets references to the menu container, order list, and order total elements from the HTML.
// Then, it loops through each category in the menu object, creates headings for each category, and appends them to the menu container.
// For each category, it creates a div element to hold the items, an unordered list for the items, and appends them to the menu container.
// Within each category, it iterates over the items, creates list items for each item, and attaches click event listeners to add items to the order.
// When an item is clicked, it calls the addToOrder function to update the order list and total cost.

// The addToOrder function is a callback function for adding an item to the order.
// It creates a list item for the ordered item, appends it to the order list, and updates the total order cost.
