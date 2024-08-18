"use client";

import Button from "@/components/ui/button";
import CouponComponent from "@/components/ui/coupon_component";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const [isDiscount, setIsDiscount] = useState({ value: 3, percent: true });
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);
  const setDiscount = ({ value, percent }) => {
    setIsDiscount({
      value,
      percent,
    });
  };

  const router = useRouter();
  const onCheckout = () => {
    // Perform any necessary actions to process the order, such as sending a payment request or saving the order details
    removeAll();
    toast.success("Order placed successfully");

    // Redirect to checkout page or any other action needed after checkout
    router.push("/");
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 ">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">SubTotal</div>
          <Currency value={totalPrice} />
        </div>
        {isDiscount.value > 0 && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Discount</div>
            <span className="flex font-bold">
              {isDiscount.percent ? (
                `${isDiscount.value * -1}%`
              ) : (
                <Currency value={isDiscount.value * -1} />
              )}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">TotalPrice</div>
          <Currency
            value={
              totalPrice -
              (isDiscount.percent
                ? totalPrice * (isDiscount.value / 100)
                : isDiscount.value)
            }
          />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
      <CouponComponent setDiscount={setDiscount} />
    </div>
  );
};

export default Summary;
