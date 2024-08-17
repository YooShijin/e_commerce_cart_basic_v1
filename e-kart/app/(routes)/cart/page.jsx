"use client";

import Container from "@/components/ui/container";
import { CartItem } from "./_components/cart-item";
import { useCart } from "@/hooks/use-cart";
import Summary from "./_components/summary";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <h3 className="text-2xl">Your cart is empty</h3>}
              {cart?.item?.length === 0 && (
                <p className="text-neutral-500">No items added to the cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            {cart.items.length > 0 && <Summary />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
