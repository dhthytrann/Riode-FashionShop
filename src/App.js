import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";
import { BrowserRouter, useParams } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProduct,
  getSuggestProduct,
} from "./redux/slice/Product/productSlice";

function App() {
  const [isAuth, setAuth] = useState(false);

  const productData = [
    //BEST SELLER
    {
      id: 48,
      sku: 987612347,
      category: [
        "CLOTHING, DRESSES",
        "Clothing",
        "Dresses",
        "Best Sellers",
        "Popular",
      ],
      name: "Solid pattern in fashion summer dress",
      rangePrice: "$140.00 – $340.00",
      price: 340,

      image: [
        "images/Product/CLOTHING/Dresses/IMG-01/img-01.jpg",
        "images/Product/CLOTHING/Dresses/IMG-01/img-02.jpg",
        "images/Product/CLOTHING/Dresses/IMG-01/img-03.jpg",
        "images/Product/CLOTHING/Dresses/IMG-01/img-04.jpg",
        "images/Product/CLOTHING/Dresses/IMG-01/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "60% OFF",
      review: 5,
      color: ["#1e73be", "#56962e"],
      size: ["L", "S", "M"],
      quantity: 10,
    },

    //SHOSES/Sneaker (id 1-9)
    {
      id: 1,
      sku: 69633543,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker"],
      name: "Basketball Sport Shoes",
      rangePrice: "$29.00 – $49.00",
      price: 39,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-01/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-01/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-01/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-01/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-01/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "10% OFF",
      review: 4,
      color: ["#222222", "#d99e76"],
      size: ["XL", "M"],
      quantity: 5,
    },
    {
      id: 2,
      sku: 987612340,
      category: [
        "SHOSES, SNEAKER",
        "Shoses",
        "Sneaker",
        "Our Featured",
        "Best of the Week",
        "Our Featured Page02",
      ],
      name: "Vans Black all star trainer shoes",
      rangePrice: "$180.00 – $210.00",
      price: 210,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-02/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-02/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-02/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-02/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "2% OFF",
      review: 5,
      color: ["#222222"],
      size: ["L", "M"],
      quantity: 2,
    },
    {
      id: 3,
      sku: 1234567893,
      category: [
        "SHOSES, SNEAKER",
        "Shoses",
        "Sneaker",
        "Best Sellers",
        "Best of the Week",
        "Our Featured Page01",
      ],
      name: "Vans Black all star trainer shoes",
      rangePrice: "$180.00 – $210.00",
      price: 210,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-03/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-03/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-03/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-03/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-03/img-05.jpg",
      ],

      featured: "SALE",
      promotion: "30% OFF",
      review: 5,
      color: ["#222222"],
      size: ["L", "M"],
      quantity: 3,
    },
    {
      id: 4,
      sku: 1234567893,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker", "Latest Products"],
      name: "Fashion Football Boots",
      rangePrice: "$199.00",
      price: 199,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-04/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-04/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-04/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-04/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-04/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 4,
    },
    {
      id: 5,
      sku: 334443,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker", "Our Featured"],
      name: "Smart Riode Men Shoes",
      rangePrice: "$210.00",
      price: 210,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-05/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-05/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-05/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-05/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-05/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 5,
      color: ["#222222"],
      size: ["L", "S"],
      quantity: 5,
    },
    {
      id: 6,
      sku: 33523422,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker"],
      name: "Men Sport Shoes Embeded PC",
      rangePrice: "$59.00 – $60.00",
      price: 59,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-06/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-06/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-06/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-06/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-06/img-05.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 6,
    },
    {
      id: 7,
      sku: 33523422,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker"],
      name: "Travel Shoes",
      rangePrice: "$49.00",
      price: 49,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-07/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-07/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-07/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-07/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-07/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 7,
    },
    {
      id: 8,
      sku: 123456793,
      category: [
        "SHOSES, SNEAKER",
        "Shoses",
        "Sneaker",
        "New Arrivals",
        "Sale Products",
      ],
      name: "Modern Football Boots",
      rangePrice: "$210.00",
      price: 210,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-08/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-08/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-08/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-08/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-08/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 8,
    },
    {
      id: 9,
      sku: 12345679,
      category: ["SHOSES, SNEAKER", "Shoses", "Sneaker"],
      name: "Fashionable Brown Denim Shoes",
      rangePrice: "$110.00",
      price: 110,

      image: [
        "images/Product/SHOSES/Sneaker/IMG-09/img-01.jpg",
        "images/Product/SHOSES/Sneaker/IMG-09/img-02.jpg",
        "images/Product/SHOSES/Sneaker/IMG-09/img-03.jpg",
        "images/Product/SHOSES/Sneaker/IMG-09/img-04.jpg",
        "images/Product/SHOSES/Sneaker/IMG-09/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 0,
      color: ["#f6a800"],
      size: ["M"],
      quantity: 2,
    },
    //SHOSES/Boots (id 10-12)
    {
      id: 10,
      sku: 987612340,
      category: ["SHOSES, BOOTS", "Shoses", "Boots"],
      name: "Metal round zipper boots",
      rangePrice: "$170.00 – $190.00",
      price: 185,

      image: [
        "images/Product/SHOSES/Boots/IMG-01/img-01.jpg",
        "images/Product/SHOSES/Boots/IMG-01/img-02.jpg",
        "images/Product/SHOSES/Boots/IMG-01/img-03.jpg",
        "images/Product/SHOSES/Boots/IMG-01/img-04.jpg",
        "images/Product/SHOSES/Boots/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#bc6d33"],
      size: ["L", "M"],
      quantity: 3,
    },
    {
      id: 11,
      sku: 12345679,
      category: ["SHOSES, BOOTS", "Shoses", "Boots"],
      name: "Square Heel Boots with Neckline",
      rangePrice: "$140.00 – $170.00",
      price: 165,

      image: [
        "images/Product/SHOSES/Boots/IMG-02/img-01.jpg",
        "images/Product/SHOSES/Boots/IMG-02/img-02.jpg",
        "images/Product/SHOSES/Boots/IMG-02/img-03.jpg",
        "images/Product/SHOSES/Boots/IMG-02/img-04.jpg",
        "images/Product/SHOSES/Boots/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "3% OFF",
      review: 3,
      color: ["#999"],
      size: ["L"],
      quantity: 2,
    },
    {
      id: 12,
      sku: 9871238,
      category: ["SHOSES, BOOTS", "Shoses", "Boots"],
      name: "Brown Leather Shoes",
      rangePrice: "$250.00 – $300.00",
      price: 300,

      image: [
        "images/Product/SHOSES/Boots/IMG-03/img-01.jpg",
        "images/Product/SHOSES/Boots/IMG-03/img-02.jpg",
        "images/Product/SHOSES/Boots/IMG-03/img-03.jpg",
        "images/Product/SHOSES/Boots/IMG-03/img-04.jpg",
        "images/Product/SHOSES/Boots/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 4,
      color: ["#965000"],
      size: ["M", "L"],
      quantity: 5,
    },
    //SHOSES/Hight Heels (id 13-18)
    {
      id: 13,
      sku: 9231631,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Shiny high heel shoes",
      rangePrice: "$350.00",
      price: 350,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-01/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-01/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-01/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-01/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#f8a5c2"],
      size: ["M", "L"],
      quantity: 5,
    },
    {
      id: 14,
      sku: 1235631,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Satin Satin High Heel Shoes",
      rangePrice: "$280.00",
      price: 280,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-02/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-02/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-02/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-02/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "3% OFF",
      review: 4,
      color: ["#fdcb6e"],
      size: ["M", "L"],
      quantity: 5,
    },
    {
      id: 15,
      sku: 8369183,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Pump High Heel Shoes ",
      rangePrice: "$250.00 – $300.00",
      price: 270,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-03/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-03/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-03/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-03/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 5,
      color: ["#ffbe76"],
      size: ["M", "L"],
      quantity: 6,
    },
    {
      id: 16,
      sku: 2309182,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Metallic Heel Pointed Heel Shoes ",
      rangePrice: "$280.00",
      price: 280,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-04/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-04/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-04/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-04/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-04/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "10% OFF",
      review: 5,
      color: ["#535c68"],
      size: ["M", "L"],
      quantity: 6,
    },
    {
      id: 17,
      sku: 5127291,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Metallic High Heel Shoes",
      rangePrice: "$190.00",
      price: 190,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-05/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-05/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-05/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-05/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-05/img-05.jpg",
      ],

      featured: "",
      promotion: "2% OFF",
      review: 3,
      color: ["#f6b93b"],
      size: ["L"],
      quantity: 4,
    },
    {
      id: 18,
      sku: 5127291,
      category: ["SHOSES, HIGHT HEELS", "Shoses", "Hight Heels"],
      name: "Pointed Toe High Heels",
      rangePrice: "$170.00 – $250.00",
      price: 220,

      image: [
        "images/Product/SHOSES/Hight Heels/IMG-06/img-01.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-06/img-02.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-06/img-03.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-06/img-04.jpg",
        "images/Product/SHOSES/Hight Heels/IMG-06/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#ffcccc"],
      size: ["L"],
      quantity: 4,
    },
    //BAGS/Backpacks (id 19-24)
    {
      id: 19,
      sku: 35236643,
      category: ["BAGS, BACKPACKS", "Bags", "Backpacks"],
      name: "Awesome Computer Bag",
      rangePrice: "$99.00 – $129.00",
      price: 119,

      image: [
        "images/Product/BAGS/Backpacks/IMG-01/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-01/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-01/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-01/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 9,
    },
    {
      id: 20,
      sku: 4654634,
      category: ["BAGS, BACKPACKS", "Bags", "Backpacks", "Latest Products"],
      name: "Best Dark blue pedestrian bag",
      rangePrice: "$199.00",
      price: 199,

      image: [
        "images/Product/BAGS/Backpacks/IMG-02/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-02/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-02/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-02/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-02/img-05.jpg",
        "images/Product/BAGS/Backpacks/IMG-02/img-06.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 3,
      color: ["#a4b0be"],
      size: ["M"],
      quantity: 6,
    },
    {
      id: 21,
      sku: 123456795,
      category: ["BAGS, BACKPACKS", "Bags", "Backpacks"],
      name: "Beyond Riode Original Backpack",
      rangePrice: "$139.00 – $169.00",
      price: 169,

      image: [
        "images/Product/BAGS/Backpacks/IMG-03/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-03/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-03/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-03/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76"],
      size: ["XL", "M"],
      quantity: 4,
    },
    {
      id: 22,
      sku: 44545322,
      category: [
        "BAGS, BACKPACKS",
        "Bags",
        "Backpacks",
        "Best Sellers",
        "Popular",
      ],
      name: "Black daily bag",
      rangePrice: "$87.00",
      price: 87,

      image: [
        "images/Product/BAGS/Backpacks/IMG-04/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-04/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-04/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-04/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-04/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "20% OFF",
      review: 5,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 9,
    },
    {
      id: 23,
      sku: 87864456,
      category: ["BAGS, BACKPACKS", "Bags", "Backpacks", "New Arrivals"],
      name: "Brown leather backpacks",
      rangePrice: "$139.00",
      price: 139,

      image: [
        "images/Product/BAGS/Backpacks/IMG-05/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-05/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-05/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-05/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-05/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#2b2b2b", "#d99e76", "#9a999d"],
      size: ["M", "XL", "L"],
      quantity: 5,
    },
    {
      id: 24,
      sku: 12345684,
      category: ["BAGS, BACKPACKS", "Bags", "Backpacks", "Our Featured Page02"],
      name: "Mackintosh Poket backpack",
      rangePrice: "$98.00 – $129.00",
      price: 98,

      image: [
        "images/Product/BAGS/Backpacks/IMG-06/img-01.jpg",
        "images/Product/BAGS/Backpacks/IMG-06/img-02.jpg",
        "images/Product/BAGS/Backpacks/IMG-06/img-03.jpg",
        "images/Product/BAGS/Backpacks/IMG-06/img-04.jpg",
        "images/Product/BAGS/Backpacks/IMG-06/img-05.jpg",
      ],

      featured: "SALE",
      promotion: "50% OFF",
      review: 0,
      color: ["#a4b0be"],
      size: ["M", "L"],
      quantity: 5,
    },
    //BAGS/Fashion Bags (id 25-33)
    {
      id: 25,
      sku: 12345675,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Cavin Fashion Suede Handbag",
      rangePrice: "$123.00",
      price: 123,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-01/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-01/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-01/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-01/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 4,
      color: ["#40407a"],
      size: ["XL", "M"],
      quantity: 5,
    },
    {
      id: 26,
      sku: 12345682,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Fashionable Overnight Bag",
      rangePrice: "$199.00",
      price: 199,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-02/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-02/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-02/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-02/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#fad390", "#d35400"],
      size: ["XL", "M"],
      quantity: 5,
    },
    {
      id: 27,
      sku: 12345681,
      category: [
        "BAGS, FASHION BAGS",
        "Bags",
        "Fashion Bags",
        "New Arrivals",
        "Latest Products",
      ],
      name: "Fashionable Leather Satchel",
      rangePrice: "$98.00 – $129.00",
      price: 98,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-03/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-03/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-03/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-03/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "30% OFF",
      review: 0,
      color: ["#222222"],
      size: ["M"],
      quantity: 7,
    },
    {
      id: 28,
      sku: 12345674,
      category: [
        "BAGS, FASHION BAGS",
        "Bags",
        "Fashion Bags",
        "New Arrivals",
        "Sale Products",
      ],
      name: "Cavin Fashion Suede Handbag",
      rangePrice: "$118.00 – $123.00",
      price: 119,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-04/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-04/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-04/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-04/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-04/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "2% OFF",
      review: 0,
      color: ["#83b237", "#9e6924", "#1e73be", "#0c0c0c"],
      size: ["XL", "L", "M", "S"],
      quantity: 10,
    },
    {
      id: 29,
      sku: 123135674,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Pixel-Cut Lid Small Handbag",
      rangePrice: "$108.00 – $123.00",
      price: 120,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-05/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-05/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-05/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-05/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-05/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#0c0c0c", "#fab1a0", "#a29bfe"],
      size: ["L", "M"],
      quantity: 7,
    },
    {
      id: 30,
      sku: 42013931,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Cotton Box Small Bags",
      rangePrice: "$200.00 – $230.00",
      price: 220,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-06/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-06/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-06/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-06/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-06/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 5,
      color: ["#fab1a0", "#ffbe76"],
      size: ["L", "M"],
      quantity: 7,
    },
    {
      id: 31,
      sku: 19237901,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Hobo Small Handbag",
      rangePrice: "$150.00",
      price: 150,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-07/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-07/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-07/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-07/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-07/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#222222", "#eccc68"],
      size: ["L", "M"],
      quantity: 10,
    },
    {
      id: 32,
      sku: 93828192,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Top Handle Small Handbag",
      rangePrice: "$120.00",
      price: 120,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-08/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-08/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-08/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-08/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-08/img-05.jpg",
      ],

      featured: "SALE",
      promotion: "40% OFF",
      review: 3,
      color: ["#5352ed"],
      size: ["M"],
      quantity: 6,
    },
    {
      id: 33,
      sku: 71630017,
      category: ["BAGS, FASHION BAGS", "Bags", "Fashion Bags"],
      name: "Cavin Klein Fashion Sheepskin handbag",
      rangePrice: "$221.00 – $243.00",
      price: 223,

      image: [
        "images/Product/BAGS/Fashion Bags/IMG-09/img-01.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-09/img-02.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-09/img-03.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-09/img-04.jpg",
        "images/Product/BAGS/Fashion Bags/IMG-09/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 4,
      color: ["#9e6924", "#1e73be", "#83b237", "#0c0c0c"],
      size: ["XL", "L", "M", "S"],
      quantity: 10,
    },
    //BAGS/Wallet (id 34)
    {
      id: 34,
      sku: 12982331,
      category: ["BAGS, WALLET", "Bags", "Wallet"],
      name: "Wallet For Men's",
      rangePrice: "$98.00",
      price: 98,

      image: [
        "images/Product/BAGS/Wallet/IMG-01/img-01.jpg",
        "images/Product/BAGS/Wallet/IMG-01/img-02.jpg",
        "images/Product/BAGS/Wallet/IMG-01/img-03.jpg",
        "images/Product/BAGS/Wallet/IMG-01/img-04.jpg",
        "images/Product/BAGS/Wallet/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "TOP",
      review: 2,
      color: ["#e58e26"],
      size: ["S"],
      quantity: 5,
    },
    //ACCESORIES/Belt (id 35)
    {
      id: 35,
      sku: 12345684,
      category: ["ACCESORIES, BELT", "Accesories", "Belt", "Our Featured"],
      name: "Wallet For Men's",
      rangePrice: "$98.00",
      price: 98,

      image: [
        "images/Product/ACCESORIES/Belt/img-01.jpg",
        "images/Product/ACCESORIES/Belt/img-02.jpg",
        "images/Product/ACCESORIES/Belt/img-03.jpg",
        "images/Product/ACCESORIES/Belt/img-04.jpg",
        "images/Product/ACCESORIES/Belt/img-05.jpg",
      ],

      featured: "TOP",
      promotion: "24% OFF",
      review: 4,
      color: ["#EAB543"],
      size: ["L"],
      quantity: 5,
    },
    //ACCESORIES/Glasses (id 36-38)
    {
      id: 36,
      sku: 12982331,
      category: ["ACCESORIES, GLASSES", "Accesories", "Glasses"],
      name: "Metal and Plastic Square Glasses",
      rangePrice: "$100.00",
      price: 100,

      image: [
        "images/Product/ACCESORIES/Glasses/IMG-01/img-01.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-01/img-02.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-01/img-03.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-01/img-04.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "55% OFF",
      review: 4,
      color: ["#222222"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 37,
      sku: 423182331,
      category: ["ACCESORIES, GLASSES", "Accesories", "Glasses"],
      name: "Double Bridge Metal Cat Eye Glasses",
      rangePrice: "$150.00",
      price: 150,

      image: [
        "images/Product/ACCESORIES/Glasses/IMG-02/img-01.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-02/img-02.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-02/img-03.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-02/img-04.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-02/img-05.jpg",
      ],

      featured: "SALE",
      promotion: "15% OFF",
      review: 4,
      color: ["#222222"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 38,
      sku: 20192891,
      category: ["ACCESORIES, GLASSES", "Accesories", "Glasses"],
      name: "Butterfly Eyeglasses Overflow",
      rangePrice: "$180.00",
      price: 180,

      image: [
        "images/Product/ACCESORIES/Glasses/IMG-03/img-01.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-03/img-02.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-03/img-03.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-03/img-04.jpg",
        "images/Product/ACCESORIES/Glasses/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 4,
      color: ["#999"],
      size: ["L"],
      quantity: 5,
    },
    //ACCESORIES/Gloves (id 39-40)
    {
      id: 39,
      sku: 713298131,
      category: ["ACCESORIES, GLOVES", "Accesories", "Gloves"],
      name: "Sports Glove",
      rangePrice: "$300.00",
      price: 300,

      image: [
        "images/Product/ACCESORIES/Gloves/IMG-01/img-01.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-01/img-02.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-01/img-03.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-01/img-04.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 0,
      color: ["#222222"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 40,
      sku: 27382010,
      category: ["ACCESORIES, GLOVES", "Accesories", "Gloves"],
      name: "Alpus Snow Boarding Gloves",
      rangePrice: "$199.00 – $210.00",
      price: 210,

      image: [
        "images/Product/ACCESORIES/Gloves/IMG-02/img-01.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-02/img-02.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-02/img-03.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-02/img-04.jpg",
        "images/Product/ACCESORIES/Gloves/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#81d742", "#267497", "#2b2b2b"],
      size: ["M", "XL", "L"],
      quantity: 8,
    },
    //ACCESORIES/Jewelly (id none)
    /*  {}, */
    //ACCESORIES/Sock (id none)
    /*  {}, */
    //ACCESORIES/Watches (id 41-47)
    {
      id: 41,
      sku: 12345671,
      category: [
        "ACCESORIES, WATCHES",
        "Accesories",
        "Watches",
        "Our Featured Page01",
      ],
      name: "Men’s Fashion Brown Watch",
      rangePrice: "$150.00",
      price: 150,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-01/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-01/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-01/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-01/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-01/img-05.jpg",
      ],

      featured: "",
      promotion: "10% OFF",
      review: 0,
      color: ["#d46d4c"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 42,
      sku: 99881810,
      category: ["ACCESORIES, WATCHES", "Accesories", "Watches"],
      name: "Apple Women’s E-Watch",
      rangePrice: "$299.00",
      price: 229,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-02/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-02/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-02/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-02/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-02/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#222222"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 43,
      sku: 99881815,
      category: ["ACCESORIES, WATCHES", "Accesories", "Watches"],
      name: "Fashion Sports Watch",
      rangePrice: "$110.00 ",
      price: 110,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-03/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-03/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-03/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-03/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-03/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 0,
      color: ["#222222"],
      size: ["M"],
      quantity: 5,
    },
    {
      id: 44,
      sku: 12345682,
      category: ["ACCESORIES, WATCHES", "Accesories", "Watches"],
      name: "Alloc Men’s Classic Watch",
      rangePrice: "$199.00 ",
      price: 199,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-04/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-04/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-04/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-04/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-04/img-05.jpg",
      ],

      featured: "",
      promotion: "50% OFF",
      review: 0,
      color: ["#222222"],
      size: ["M"],
      quantity: 5,
    },
    {
      id: 45,
      sku: 12345672,
      category: [
        "ACCESORIES, WATCHES",
        "Accesories",
        "Watches",
        "Best Sellers",
        "Our Featured Page01",
      ],
      name: "Men’s Fashion Grey Watch",
      rangePrice: "$130.00",
      price: 130,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-05/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-05/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-05/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-05/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-05/img-05.jpg",
      ],

      featured: "Top",
      promotion: "40% OFF",
      review: 4,
      color: ["#a4b0be"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 46,
      sku: 12345672,
      category: ["ACCESORIES, WATCHES", "Accesories", "Watches"],
      name: "Classic Watch",
      rangePrice: "$110.00",
      price: 110,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-06/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-06/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-06/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-06/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-06/img-05.jpg",
      ],

      featured: "",
      promotion: "",
      review: 5,
      color: ["#222222"],
      size: ["L"],
      quantity: 5,
    },
    {
      id: 47,
      sku: 1234561,
      category: [
        "ACCESORIES, WATCHES",
        "Accesories",
        "Watches",
        "New Arrivals",
      ],
      name: "American Fashion Watch",
      rangePrice: "$15.00",
      price: 15,

      image: [
        "images/Product/ACCESORIES/Watches/IMG-07/img-01.jpg",
        "images/Product/ACCESORIES/Watches/IMG-07/img-02.jpg",
        "images/Product/ACCESORIES/Watches/IMG-07/img-03.jpg",
        "images/Product/ACCESORIES/Watches/IMG-07/img-04.jpg",
        "images/Product/ACCESORIES/Watches/IMG-07/img-05.jpg",
      ],

      featured: "SALE",
      promotion: "80% OFF",
      review: 5,
      color: ["#2f3542"],
      size: ["L"],
      quantity: 5,
    },
    //CLOTHING/Bottoms (id none)
    /*   {}, */
    //CLOTHING/Dresses (id 48-49)
    /* id = 48 */
    // {
    //   id: 49,
    //   sku: 917112347,
    //   category: ["CLOTHING, DRESSES", "Clothing", "Dresses"],
    //   name: "Solid pattern in fashion summer dress",
    //   rangePrice: "$140.00 – $340.00",
    //   price: 340,

    //   image: [
    //     "images/Product/CLOTHING/Dresses/IMG-02/img-01.jpg",
    //     "images/Product/CLOTHING/Dresses/IMG-02/img-02.jpg",
    //     "images/Product/CLOTHING/Dresses/IMG-02/img-03.jpg",
    //     "images/Product/CLOTHING/Dresses/IMG-02/img-04.jpg",
    //     "images/Product/CLOTHING/Dresses/IMG-02/img-05.jpg",
    //   ],

    //   featured: "TOP",
    //   promotion: "60% OFF",
    //   review: 5,
    //   color: ["#1e73be", "#56962e"],
    //   size: ["L", "S", "M"],
    //   quantity: 10,
    // },
    //CLOTHING/Jackets (id 50-54)
    {
      id: 50,
      sku: 12345678,
      category: [
        "CLOTHING, JACKETS",
        "Clothing",
        "Jackets",
        "Our Featured",
        "Best of the Week",
      ],
      name: "Fashionable Hooded Coat",
      rangePrice: "$210.00",
      price: 210,

      image: [
        "images/Product/CLOTHING/Jackets/IMG-01/img-01.jpg",
        "images/Product/CLOTHING/Jackets/IMG-01/img-02.jpg",
        "images/Product/CLOTHING/Jackets/IMG-01/img-03.jpg",
        "images/Product/CLOTHING/Jackets/IMG-01/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "",
      review: 5,
      color: ["#965000", "#1e73be"],
      size: ["M", "L", "S"],
      quantity: 10,
    },
    // {
    //   id: 51,
    //   sku: 1234622,
    //   category: ["CLOTHING, JACKETS", "Clothing", "Jackets"],
    //   name: "Lapel Coat",
    //   rangePrice: "$139.00 – $169.00",
    //   price: 160,

    //   image: [
    //     "images/Product/CLOTHING/Jackets/IMG-02/img-01.jpg",
    //     "images/Product/CLOTHING/Jackets/IMG-02/img-02.jpg",
    //     "images/Product/CLOTHING/Jackets/IMG-02/img-03.jpg",
    //     "images/Product/CLOTHING/Jackets/IMG-02/img-04.jpg",
    //   ],

    //   featured: "TOP",
    //   promotion: "13% OFF",
    //   review: 4,
    //   color: ["#81d742", "#d99e76", "#267497"],
    //   size: ["M", "S"],
    //   quantity: 7,
    // },
    {
      id: 52,
      sku: 12345680,
      category: ["CLOTHING, JACKETS", "Clothing", "Jackets", "New Arrivals"],
      name: "Lapel Coat",
      rangePrice: "$60.00",
      price: 60,

      image: [
        "images/Product/CLOTHING/Jackets/IMG-03/img-01.jpg",
        "images/Product/CLOTHING/Jackets/IMG-03/img-02.jpg",
        "images/Product/CLOTHING/Jackets/IMG-03/img-03.jpg",
        "images/Product/CLOTHING/Jackets/IMG-03/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#222222"],
      size: ["M", "S"],
      quantity: 7,
    },
    {
      id: 53,
      sku: 16345680,
      category: ["CLOTHING, JACKETS", "Clothing", "Jackets"],
      name: "Fashionable Padded Jacket",
      rangePrice: "$223.00",
      price: 223,

      image: [
        "images/Product/CLOTHING/Jackets/IMG-04/img-01.jpg",
        "images/Product/CLOTHING/Jackets/IMG-04/img-02.jpg",
        "images/Product/CLOTHING/Jackets/IMG-04/img-03.jpg",
        "images/Product/CLOTHING/Jackets/IMG-04/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#222222"],
      size: ["M", "S"],
      quantity: 7,
    },
    {
      id: 54,
      sku: 123456784,
      category: ["CLOTHING, JACKETS", "Clothing", "Jackets"],
      name: "Blue Winter Wear",
      rangePrice: "$99.00",
      price: 99,

      image: [
        "images/Product/CLOTHING/Jackets/IMG-05/img-01.jpg",
        "images/Product/CLOTHING/Jackets/IMG-05/img-02.jpg",
        "images/Product/CLOTHING/Jackets/IMG-05/img-03.jpg",
        "images/Product/CLOTHING/Jackets/IMG-05/img-04.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 0,
      color: ["#9a999d", "#267497"],
      size: ["L", "S"],
      quantity: 7,
    },
    //CLOTHING/Tops (id 55-63)
    {
      id: 55,
      sku: 123456701,
      category: [
        "CLOTHING, TOPS",
        "Clothing",
        "Tops",
        "New Arrivals",
        "Popular",
      ],
      name: "Beyond Riode Original T-Shirt",
      rangePrice: "$209.00 – $215.00",
      price: 209,

      image: [
        "images/Product/CLOTHING/Tops/IMG-01/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-01/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-01/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-01/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "5% OFF",
      review: 4,
      color: ["#0c0c0c", "#1e73be", "#9e6924", "#83b237"],
      size: ["XL", "L", "M", "S"],
      quantity: 10,
    },
    {
      id: 56,
      sku: 987612345,
      category: [
        "CLOTHING, TOPS",
        "Clothing",
        "Tops",
        "Our Featured",
        "Best Sellers",
      ],
      name: "Fashionable original trucker",
      rangePrice: "$38.00 – $50.00",
      price: 47,

      image: [
        "images/Product/CLOTHING/Tops/IMG-02/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-02/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-02/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-02/img-04.jpg",
      ],

      featured: "TOP",
      promotion: "50% OFF",
      review: 4,
      color: ["#1e73be", "#56962e", "#965000"],
      size: ["M", "L"],
      quantity: 10,
    },
    {
      id: 57,
      sku: 987612341,
      category: ["CLOTHING, TOPS", "Clothing", "Tops", "Sale Products"],
      name: "Spon wide-striped shirt",
      rangePrice: "$38.00 – $50.00",
      price: 47,

      image: [
        "images/Product/CLOTHING/Tops/IMG-03/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-03/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-03/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-03/img-04.jpg",
      ],

      featured: "",
      promotion: "5% OFF",
      review: 4,
      color: ["#1e73be"],
      size: ["M", "S"],
      quantity: 10,
    },
    {
      id: 58,
      sku: 1231245,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Summer Clothes 3x",
      rangePrice: "$116.00",
      price: 116,

      image: [
        "images/Product/CLOTHING/Tops/IMG-04/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-04/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-04/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-04/img-04.jpg",
      ],

      featured: "Top",
      promotion: "",
      review: 4,
      color: ["#2b2b2b", "#267497", "#d99e76", "#9a999d"],
      size: ["XL", "L", "M", "S"],
      quantity: 10,
    },
    {
      id: 59,
      sku: 98231245,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Check Cotton T-Shirt",
      rangePrice: "$30.00",
      price: 30,

      image: [
        "images/Product/CLOTHING/Tops/IMG-05/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-05/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-05/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-05/img-04.jpg",
      ],

      featured: "",
      promotion: "80% OFF",
      review: 4,
      color: ["#2b2b2b", "#FDA7DF"],
      size: ["XL", "L", "M", "S"],
      quantity: 10,
    },
    {
      id: 60,
      sku: 99821945,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Checked Cotton Shirt",
      rangePrice: "$259.00",
      price: 259,

      image: [
        "images/Product/CLOTHING/Tops/IMG-06/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-06/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-06/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-06/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#2b2b2b", "#999"],
      size: ["XL", "L", "M"],
      quantity: 10,
    },
    {
      id: 61,
      sku: 93121945,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Checked Cotton Shirt",
      rangePrice: "$209.00",
      price: 209,

      image: [
        "images/Product/CLOTHING/Tops/IMG-07/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-07/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-07/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-07/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#2b2b2b", "#999"],
      size: ["XL", "L", "M"],
      quantity: 10,
    },
    {
      id: 62,
      sku: 792121945,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Checked Cotton Shirt",
      rangePrice: "$200.00",
      price: 200,

      image: [
        "images/Product/CLOTHING/Tops/IMG-08/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-08/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-08/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-08/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#2b2b2b", "#999"],
      size: ["XL", "L", "M"],
      quantity: 10,
    },
    {
      id: 63,
      sku: 892121945,
      category: ["CLOTHING, TOPS", "Clothing", "Tops"],
      name: "Checked Cotton Shirt",
      rangePrice: "$200.00",
      price: 200,

      image: [
        "images/Product/CLOTHING/Tops/IMG-09/img-01.jpg",
        "images/Product/CLOTHING/Tops/IMG-09/img-02.jpg",
        "images/Product/CLOTHING/Tops/IMG-09/img-03.jpg",
        "images/Product/CLOTHING/Tops/IMG-09/img-04.jpg",
      ],

      featured: "",
      promotion: "",
      review: 4,
      color: ["#2b2b2b", "#999"],
      size: ["XL", "L", "M"],
      quantity: 10,
    },
  ];

  const [cartData, setCartData] = useState([
    // {
    //   idCart: 0,
    //   idProduct: 1,
    //   size: "XL",
    //   color: "Brown",
    //   amount: 3,
    // },
  ]);

  const [filterProductData, setFilterProductData] = useState(productData);

  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const [openCart, setOpenCart] = useState(false);

  const [openViewProduct, setOpenViewProduct] = useState(false);
  const [idViewProduct, setIdViewProduct] = useState();

  const [openVideoPopup, setOpenVideoPopup] = useState(false);

  const [openFilterPopup, setOpenFilterPopup] = useState(false);

  const [openAdvertisementPopup, setOpenAdvertisementPopup] = useState(false);

  const dispath = useDispatch();

  // useEffect(() => {
  //   dispath(getAllProduct());
  //   dispath(getSuggestProduct());
  // }, []);

  const inTotalCart = () => {
    const total = cartData.reduce((accumulator, object) => {
      const item = productData.find((val) => val.id === object.idProduct);
      const price = item.price;

      return accumulator + object.amount * price;
    }, 0);
    setCartTotalAmount(total);
  };

  useEffect(() => {
    inTotalCart();
  }, [cartData]);

  const param = useParams();

  useEffect(() => {
    // 👇️ scroll to top on page load
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={[isAuth, setAuth]}>
        <DataContext.Provider
          value={{
            productData,

            cartData,
            setCartData,

            openCart,
            setOpenCart,

            cartTotalAmount,
            setCartTotalAmount,

            openViewProduct,
            setOpenViewProduct,

            idViewProduct,
            setIdViewProduct,

            openVideoPopup,
            setOpenVideoPopup,

            openFilterPopup,
            setOpenFilterPopup,

            filterProductData,
            setFilterProductData,

            openAdvertisementPopup,
            setOpenAdvertisementPopup,
          }}
        >
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
