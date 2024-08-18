import React, { useState } from "react";
import { toast } from "react-hot-toast";

const CouponComponent = ({ setDiscount }) => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null); // New state for applied coupon
  const availableCoupons = ["PERCENT10", "SAVE300"];

  const handleApplyCoupon = () => {
    if (couponCode) {
      const isValid = availableCoupons.includes(couponCode);
      if (isValid) {
        setAppliedCoupon(couponCode); // Set the applied coupon
        toast.success(`Coupon "${couponCode}" applied!`);
        if (couponCode === "PERCENT10") {
          setDiscount({ value: 10, percent: true });
        } else {
          setDiscount({ value: 300, percent: false });
        }

        setCouponCode(""); // Clear the input after applying
      } else {
        toast.error("Invalid coupon code.");
        setCouponCode(""); // Clear the input
      }
    } else {
      toast.error("Please enter a coupon code.");
    }
  };

  const handleClearCoupon = () => {
    setAppliedCoupon(null); // Clear the applied coupon
    setDiscount({ value: 3, percent: false });
    setCouponCode(""); // Clear the input
  };

  const handleCopyCoupon = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success(`Coupon "${code}" copied to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy coupon.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <div className="mb-4">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter coupon code"
          disabled={!!appliedCoupon} // Disable input if a coupon is applied
        />
        {appliedCoupon && (
          <div className="mt-2 flex justify-between items-center p-2 bg-gray-100 border border-gray-300 rounded-md">
            <span>Applied Coupon: {appliedCoupon}</span>
            <button
              onClick={handleClearCoupon}
              className="text-red-500 hover:underline"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <button
        onClick={handleApplyCoupon}
        className="w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        disabled={!!appliedCoupon} // Disable button if a coupon is applied
      >
        Apply Coupon
      </button>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Available Coupons:</h3>
        <ul className="space-y-2">
          {availableCoupons.map((code) => (
            <li
              key={code}
              className="flex justify-between items-center p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => handleCopyCoupon(code)}
            >
              <span>{code}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the event from propagating to the parent `li` element
                  handleCopyCoupon(code);
                }}
                className="text-black hover:underline"
              >
                Copy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CouponComponent;
