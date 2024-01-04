import React from "react";
import TotalPrice from "./TotalPrice";

type SelectedItem = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

type SelectedItemsListProps = {
  selectedItems: SelectedItem[];
  onQuantityChange: (productId: string, quantityChange: number) => void;
};

const SelectedItemsList: React.FC<SelectedItemsListProps> = ({
  selectedItems,
  onQuantityChange,
}) => {
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mb-4">
      <h2 className="text-xl mb-2 font-medium text-gray-700 sm:text-3xl">
        Selected Items
      </h2>
      <div className="mt-10 lg:mt-0">
        <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="sr-only">Items in your cart</h3>
          <ul role="list" className="divide-y divide-gray-200">
            {selectedItems.map((item) => (
              <li key={item.productId} className="flex py-6 px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 rounded-md"
                  />
                </div>
                <div className="ml-6 flex-1 flex flex-col">
                  <div className="flex">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm">
                        <h1 className="font-medium text-gray-700 hover:text-gray-800">
                          {item.name}
                        </h1>
                      </h4>
                    </div>
                  </div>
                  <div className="flex-1 pt-2 flex items-end justify-between">
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Quantity:
                      <span className="ml-2">{item.quantity}</span>
                      <button
                        onClick={() => onQuantityChange(item.productId, -1)}
                        className="text-xs bg-gray-200 px-2 py-1 rounded-l cursor-pointer ml-4"
                      >
                        -
                      </button>
                      <button
                        onClick={() => onQuantityChange(item.productId, 1)}
                        className="text-xs bg-gray-200 px-2 py-1 rounded-r cursor-pointe ml-4"
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <div className="flex-1 pt-2 flex items-end justify-between">
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      Price: <span>{item.price * item.quantity} $</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
            <div className="flex items-center justify-between">
              <TotalPrice totalPrice={totalPrice} />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemsList;
