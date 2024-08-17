const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async () => {
  return [
    { name: "Clothes", id: "1" },
    { name: "Mobile", id: "2" },
    { name: "Sports", id: "3" },
  ];
};
