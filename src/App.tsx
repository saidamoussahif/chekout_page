import React, { useState } from "react";
import SelectedItemsList from "./components/SelectedItemsList";
import CheckoutButton from "./components/CheckoutButton";

function App() {
  const [selectedItems, setSelectedItems] = useState([
    {
      productId: "product_id_1",
      name: "Product 1",
      quantity: 2,
      price: 19.99,
      image:
        "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    },
    {
      productId: "product_id_2",
      name: "Product 2",
      quantity: 1,
      price: 29.99,
      image:
        "https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    cardName: "",
  });

  const handleQuantityChange = (productId: string, quantityChange: number) => {
    const updatedItems = selectedItems.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: Math.max(item.quantity + quantityChange, 0),
        };
      }
      return item;
    });
    setSelectedItems(updatedItems);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckout = () => {
    if (formData.email.trim() === "" || formData.cardNumber.trim() === "" || formData.cardName.trim() === "") {
      window.alert("Veuillez remplir tous les champs.");
      return;
    }
  
    console.log("Checkout button clicked! Implement your checkout logic here.");
  
    window.alert("Checkout successful!");
    setFormData({
      email: "",
      cardNumber: "",
      cardName: "",
    });
  };

  return (
    <div className="app ">
      <div className="relative mx-auto w-full p-6">
        <div className="grid min-h-screen grid-cols-10 ">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24 relative flex flex-col pl-8 pr-4">
            <div className="mx-40 w-full max-w-xl">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                E-commerce Checkout Page
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>
              <form
                onSubmit={handleCheckout}
                className="mt-10 flex flex-col space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm p-12"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="test@email.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="card-number"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234-5678-XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="card-name" className="sr-only">
                    Card name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="cardName"
                    required
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="Name on the card"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <CheckoutButton onClick={handleCheckout} />
              </form>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <SelectedItemsList
              selectedItems={selectedItems}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
