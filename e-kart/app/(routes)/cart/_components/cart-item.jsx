"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export const CartItem = ({ data }) => {
  const cart = useCart();
  const onRemoveFromCart = () => {
    cart.removeItem(data.id);
  };

  const incrementQuantity = () => {
    cart.incrementQty(data.id);
  };
  const decrementQuantity = () => {
    cart.decrementQty(data.id);
  };
  const enterQuantity = (e) => {
    if (typeof e.target.value === "number") {
      enterQty(data.id, parseInt(e.target.value));
    } else toast.error("Invalid quantity");
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative overflow-hidden h-24 w-24 rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={data.imageUrl}
          alt="Image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col gap-6 justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm h-8 md:h-auto">
            <IconButton
              onClick={decrementQuantity}
              icon={<Minus size={15} className="rounded-none " />}
            />
            <input
              type="string"
              value={data.quantity}
              onChange={enterQuantity}
              className="w-24 mx-1 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></input>
            <IconButton
              onClick={incrementQuantity}
              icon={<Plus size={15} className="rounded-none " />}
            />
            <div className="absolute z-10 right-0 top-0">
              <IconButton onClick={onRemoveFromCart} icon={<X size={25} />} />
            </div>
          </div>
          <Currency value={data.price * data.quantity} className="mt-1" />
        </div>
      </div>
    </li>
  );
};
