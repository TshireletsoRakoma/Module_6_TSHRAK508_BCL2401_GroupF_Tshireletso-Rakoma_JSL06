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
