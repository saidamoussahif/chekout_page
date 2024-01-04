# E-commerce Checkout Page
# React + TypeScript + Vite

# Project Structure
src/
|-- components/
|   |-- SelectedItemsList.tsx
|   |-- TotalPrice.tsx
|   |-- CheckoutButton.tsx
|   |-- CheckoutForm.tsx
|   |-- SuccessPopup.tsx
|-- App.tsx
|-- index.tsx
|-- ...

# Technical Requirements
React: The front-end is built using React, providing a modular and efficient user interface.
tanstack/query: Utilized for making simulated POST requests to the backend, enabling efficient data handling.
Cypress: End-to-end testing using Cypress ensures the application's functionality works as expected.
Error Handling: The application handles potential errors or side behaviors that may arise from the server's responses.
Tailwind CSS: The Tailwind CSS framework is employed for styling, ensuring a responsive and visually appealing design.
Vite.js or Next.js: The project is built using Vite.js, providing a fast and efficient development environment.
TypeScript: TypeScript is used for writing the application, enhancing code maintainability and catching potential errors during development.


# Getting Started

npx create-vite my-checkout-page --template react-ts
cd my-checkout-page

npm install

# For tanstack/query
npm install react-query

# For Cypress
npm install cypress --save-dev

# For Tailwind CSS
npm install tailwindcss

# For TypeScript
npm install --save-dev typescript @types/react @types/node


Run the application locally: 
npm run dev

# Demo
![image](https://github.com/saidamoussahif/chekout_page/assets/93975470/e2d2eb14-d0c7-4f72-a9b5-59fc68fba715)
