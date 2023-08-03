import { useContext, useEffect, useState } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";
import Carousel from "react-elastic-carousel";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import AdvertisingShoses from "../../../components/Advertising/AdvertisingShoses/AdvertisingShoses";
import AdvertisingSummer from "../../../components/Advertising/AdvertisingSummer/AdvertisingSummer";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";
import AdvertisingCollection from "../../../components/Advertising/AdvertisingCollection/AdvertisingCollection";
import SubscribeBanner from "../../../components/Banner/SubscribeBanner/SubscribeBanner";

const Home = () => {
  const { filterProductData, setFilterProductData } = useContext(DataContext);

  const { productData } = useContext(DataContext);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const breakPointsOurClient = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  });

  // const listProduct = JSON.parse(localStorage.getItem("productData"));
  // const [productData, setProductData] = useState(listProduct);

  const filterOurFeatured = productData.filter((val) =>
    val.category.includes("Our Featured")
  );
  const filterBestSellers = productData.filter((val) =>
    val.category.includes("Best Sellers")
  );
  const filterNewArrivals = productData.filter((val) =>
    val.category.includes("New Arrivals")
  );
  const filterShoses = productData.filter((val) =>
    val.category.includes("Shoses")
  );
  const filterClothing = productData.filter((val) =>
    val.category.includes("Clothing")
  );
  const filterBags = productData.filter((val) => val.category.includes("Bags"));
  const filterAccesories = productData.filter((val) =>
    val.category.includes("Accesories")
  );
  const filterLatestProduct = productData.filter((val) =>
    val.category.includes("Bags")
  );

  return (
    <div className="home-page">
      <TopBanner />
      <div className="advertising">
        <Advertising01 />
      </div>
      <div className="list-product-best-sellers">
        <h2 class="main-title mb-4">
          <b>Best Sellers</b>
          <em>Best Sellers</em>
        </h2>
        <ListProduct listProduct={filterBestSellers} />
      </div>
      <div className="list-product-categories">
        <div className="list-categories container">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
          >
            <Link
              to={"/categories/Shoes/0/400"}
              replace={true}
              onClick={() => {
                const filterShoses = productData.filter((val) =>
                  val.category.includes("Shoses")
                );
                setFilterProductData(filterShoses);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/bg-01.jpg"}
                categoriesName={"SHOSES"}
                numberProduct={filterShoses.length}
              />
            </Link>
            <Link
              to={"/categories/Bags/0/400"}
              replace={true}
              onClick={() => {
                const filterBags = productData.filter((val) =>
                  val.category.includes("Bags")
                );
                setFilterProductData(filterBags);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/bg-02.jpg"}
                categoriesName={"BAGS"}
                numberProduct={filterBags.length}
              />
            </Link>
            <Link
              to={"/categories/Accessories/0/400"}
              replace={true}
              onClick={() => {
                const filterAccesories = productData.filter((val) =>
                  val.category.includes("Accesories")
                );
                setFilterProductData(filterAccesories);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/bg-03.jpg"}
                categoriesName={"ACCESSORIES"}
                numberProduct={filterAccesories.length}
              />
            </Link>
            <Link
              to={"/categories/Clothing/0/400"}
              replace={true}
              onClick={() => {
                const filterClothing = productData.filter((val) =>
                  val.category.includes("Clothing")
                );
                setFilterProductData(filterClothing);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/bg-04.jpg"}
                categoriesName={"CLOTHING"}
                numberProduct={filterClothing.length}
              />
            </Link>
          </Carousel>
        </div>
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Our Featured</b>
          <em>Our Featured</em>
        </h2>
        <ListProduct listProduct={filterOurFeatured} />
      </div>
      <div className="advertising">
        <AdvertisingCollection />
      </div>
      <div className="list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>New Arrivals</b>
          <em>New Arrivals</em>
        </h2>
        <ListProduct listProduct={filterNewArrivals} />
      </div>
      <div className="advertising">
        <AdvertisingSummer />
      </div>
      <div className="list-product-best-sellers">
        <h2 class="main-title mb-4">
          <b>Latest Products</b>
          <em>Latest Products</em>
        </h2>
        <ListProduct listProduct={filterLatestProduct} />
      </div>

      <div className="subscribe-banner-layout">
        <SubscribeBanner />
      </div>

      <div className="blog list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Latest News</b>
          <em>Latest News</em>
        </h2>
        <div className="list-news container">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
            itemPadding={[0, 7]}
          >
            <div className="item-news">
              <div className="img-banner">
                <img src="/images/Page Home/News/img-01.jpg " alt="" />
              </div>
              <div className="content">
                <div className="author">
                  <span>by</span>
                  <p className="mb-0">JOHN DOE</p>
                  <span>on</span>
                  <p className="mb-0">September 6, 2022</p>
                </div>
                <p className="title mb-0">Quisque volutpat mattiseros.</p>
                <div className="btn-read-more">
                  <p className="mb-0">Read more</p>
                  <i class="fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
            <div className="item-news">
              <div className="img-banner">
                <img src="/images/Page Home/News/img-02.jpg " alt="" />
              </div>
              <div className="content">
                <div className="author">
                  <span>by</span>
                  <p className="mb-0">JOHN DOE</p>
                  <span>on</span>
                  <p className="mb-0">September 6, 2022</p>
                </div>
                <p className="title mb-0">Quisque volutpat mattiseros</p>
                <div className="btn-read-more">
                  <p className="mb-0">Read more</p>
                  <i class="fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
            <div className="item-news">
              <div className="img-banner">
                <img src="/images/Page Home/News/img-03.jpg " alt="" />
              </div>
              <div className="content">
                <div className="author">
                  <span>by</span>
                  <p className="mb-0">JOHN DOE</p>
                  <span>on</span>
                  <p className="mb-0">September 6, 2022</p>
                </div>
                <p className="title mb-0">Quisque volutpat mattiseros</p>
                <div className="btn-read-more">
                  <p className="mb-0">Read more</p>
                  <i class="fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
            <div className="item-news">
              <div className="img-banner">
                <img src="/images/Page Home/News/img-04.jpg " alt="" />
              </div>
              <div className="content">
                <div className="author">
                  <span>by</span>
                  <p className="mb-0">JOHN DOE</p>
                  <span>on</span>
                  <p className="mb-0">September 6, 2022</p>
                </div>
                <p className="title mb-0">Quisque volutpat mattiseros</p>
                <div className="btn-read-more">
                  <p className="mb-0">Read more</p>
                  <i class="fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="our-client list-product-our-featured">
        <h2 class="main-title mb-4">
          <b>Our Client</b>
          <em>Our Client</em>
        </h2>
        <div className="list-our-client container">
          <Carousel
            // loop
            // enableAutoPlay
            // autoPlaySpeed={1000}
            breakPoints={breakPointsOurClient}
            showArrows={false}
            pagination={false}
            itemPadding={[0, 7]}
          >
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-01.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-02.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-03.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-04.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-05.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-06.png " alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
