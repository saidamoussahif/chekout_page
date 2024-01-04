import React from "react";

const TotalPrice: React.FC<{ totalPrice: number }> = ({ totalPrice }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl mb-2 font-medium text-gray-700 sm:text-3xl">
        Total Price
      </h2>
      <p className="text-lg">{totalPrice} $</p>
    </div>
  );
};

export default TotalPrice;
