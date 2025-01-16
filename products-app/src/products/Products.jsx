import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "16px auto" }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />

      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ marginTop: "8px" }}>
          ${product.price}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Add to Cart
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 199.99,
      image: "https://mui.com/static/images/cards/paella.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 6,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 7,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 8,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 9,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
    {
      id: 10,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      image: "https://mui.com/static/images/cards/paella.jpg",    },
  ];
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Products;
