"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
});
const Currency = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) {
    setIsMounted(true);
  }
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
