import React from 'react';

interface CheckoutButtonProps {
  onClick: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onClick }) => {
  return (
    <button
      className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      onClick={onClick}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
