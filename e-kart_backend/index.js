import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/products", async (req, res) => {
  try {
    const posts = await prisma.product.findMany({
      where: {},
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

const uploadProduct = async (name, price, description, imageUrl) => {
  const post = await prisma.product.create({
    data: {
      name,
      price,
      description,
      imageUrl,
      isFeatured: true,
    },
  });
  console.log(post);
};

const server = app.listen(5000, console.log("Server listening on port 5000"));
