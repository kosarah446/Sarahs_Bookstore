# Semester Project: Sarah's Bookstore

## Project Overview
Sarah's Bookstore is a small e-commerce platform featuring
six books. The early-stage e-commerce platform provides a
user-friendly shopping experience. The project consists of
functionalities such as adding items to a cart, dynamically
updating the cart display, removing items, and a simple
checkout process. Moreover, a contact form allows users
to send inquiries with immediate feedback.

---

## Running the Project Locally

### 1. Download the ZIP file.
### 2. Extract the contents to a folder on your computer.
### 3. Navigate to the folder containing the project files.
### 4. Double-click on index.html to open it in your default web browser.
### 5. Use the navigation menu to explore the “Items,” “Contact Us,” and “Shopping Cart” pages.
### 6. Add books to the cart, review your selection, and proceed to checkout.

---

## Applied Technologies

### 1. HTML
- **Purpose**: To layout and structure the website.
- **Usage**: 
  - Created layouts for the homepage, items page, cart page, and contact form.

### 2. CSS
- **Purpose**: To style the website.
- **Usage**: 
  - Styled the shopping cart, buttons, contact form, and confirmation messages.
  - Created responsiveness and alignment for various screen sizes.

### 3. JavaScript
- **Purpose**: To add interactivity and functionality.
- **Usage**:
  - Implemented dynamic cart functionality, allowing users to:
    - Add books to the cart.
    - Display the cart contents with real-time updates.
    - Remove individual items.
    - Complete the checkout process.
  - Used the `localStorage` API to persist cart data across sessions.
  - Managed form submissions by dynamically adding confirmation messages to the page.

---

## JavaScript Functionalities

### 1. Add to Cart
- **Functionality**: Allows users to add books to their cart via the "Add to Cart" button.
- **Key Features**:
  - Ensures users cannot add duplicate items by verifying if the item already exists in the cart.
  - Persists cart data in `localStorage`.

### 2. Update Cart
- **Functionality**: Dynamically displays the cart's contents on the cart page.
- **Key Features**:
  - Shows all added items, their prices, and the total cost.
  - Displays a message indicating empty cart when no items are present.

### 3. Remove Item
- **Functionality**: Removes items from the cart with a "Remove" button.
- **Key Features**:
  - Updates the cart in real-time and syncs changes with `localStorage`.

### 4. Checkout
- **Functionality**: Completes the purchase and clears the cart.
- **Key Features**:
  - Displays a confirmation message upon successful checkout.
  - Clears the cart from both the display and `localStorage`.

### 5. Contact Form Submission
- **Functionality**: Handles form submissions on the "Contact Us" page.
- **Key Features**:
  - Prevents default form submission behavior.
  - Dynamically displays a confirmation message after submission.
  - Resets the form fields.

---

## Why These Technologies?

### HTML and CSS
HTML and CSS serve as the backbone of any web project,
offering a framework for structuring content and
styling it in a user-friendly way.


### JavaScript
JavaScript was chosen for its ability to improve functionality
and interactivity. It allowed the development of a fully
operational shopping cart system that operates seamlessly
without the need for a backend server.

### LocalStorage
LocalStorage was utilized to store data directly in the
browser, eliminating the need for complex databases while
ensuring data persistence across user sessions.

---

## Experience Working on the Project
Creating this website was an enjoyable and fulfilling
experience. It allowed me to blend creativity with technical
problem-solving. Working on the cart functionality and
optimizing user interactions offered valuable insights into
JavaScript’s event handling and DOM manipulation, enhancing
both my coding skills and understanding of user-centric
design.

---

## Course Application
One of the most fascinating topics covered in the course was
JavaScript DOM manipulation and event handling. These
concepts were crucial for the development of this project,
allowing the implementation of dynamic cart management and
responsive form submissions.

---

## Future Improvements
- Building backend support for user authentication and secure payment processing.
- Adding more advanced features like product categories, search, and filtering.
- Improving the design with animations for a better user experience.

---

Thank you for visiting Sarah’s Bookstore! We hope you had a
great time exploring our collection and look forward to
seeing you again soon!
