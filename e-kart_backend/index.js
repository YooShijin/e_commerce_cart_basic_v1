import express from "express";
const app = express();

app.get("/products", async (req, res) => {
  try {
    res.json([
      {
        id: 1,
        name: "Shoe",
        price: 456.7,
        description: "This is a nice shoe",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723916754/E-kart/shoe.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:25:00.157Z",
        updatedAt: "2024-08-17T18:25:00.157Z",
      },
      {
        id: 2,
        name: "Shirt",
        price: 340.56,
        description: "This is a nice shirt",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917065/E-kart/qapqbbq7pzmp6ccx1iym.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 3,
        name: "Time Watch",
        price: 699,
        description: "This is a nice watch",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917328/E-kart/yaimrgdvkgnwo0gpa619.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 4,
        name: "T-Shirt",
        price: 98.8,
        description: "This is a nice T-shirt",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917019/E-kart/vxmyvnxlkj6ncj8y0tx9.png",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 5,
        name: "Mobile Phone",
        price: 850.99,
        description: "This is a nice phone",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917370/E-kart/s8aott25xfglebuneas4.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 6,
        name: "Bicycle",
        price: 434.9,
        description: "This is a nice bicycle",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917407/E-kart/bc54viy1aevvcd7qfqve.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 7,
        name: "Pro Tablet",
        price: 120.32,
        description: "This is a nice tablet",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917249/E-kart/ncoxosfdt3i1tjvzt4cg.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 8,
        name: "Badminton Racket",
        price: 110.13,
        description: "This is a nice racket",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723917496/E-kart/qyyhkydrwvcwpdqltitu.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 9,
        name: "Cooler",
        price: 187.25,
        description: "This is a nice cooler",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723988261/E-kart/eisyfa3srcptgpjvqadp.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
      {
        id: 10,
        name: "Jeans",
        price: 237.32,
        description: "This is a nice Jeans",
        imageUrl:
          "https://res.cloudinary.com/ddvrbjegh/image/upload/v1723988326/E-kart/hgo0pm0rvevxra7codfm.jpg",
        isFeatured: true,
        createdAt: "2024-08-17T18:42:39.992Z",
        updatedAt: "2024-08-17T18:42:39.992Z",
      },
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

const server = app.listen(5000, console.log("Server listening on port 5000"));
