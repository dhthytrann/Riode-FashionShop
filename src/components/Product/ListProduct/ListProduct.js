import Carousel from "react-elastic-carousel";
import ItemProduct from "../ItemProduct/ItemProduct";
import "../ListProduct/ListProduct.scss";

const ListProduct = ({ listProduct }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 576, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const rate = 3;
  const diverse = true;

  return (
    <div className="list-products list-products-render custom-list-product container">
      <Carousel
        itemPadding={[0, 7]}
        breakPoints={breakPoints}
        showArrows={false}
        pagination={false}
      >
        {listProduct &&
          listProduct.map((product) => (
            <ItemProduct
              key={product.id}
              idProduct={product.id}
              imgProduct01={product?.image[0]}
              imgProduct02={product?.image[1]}
              productName={product?.name}
              categoryName={product?.category[0]}
              price={product?.price}
              rate={product?.review}
              discount={product?.promotion}
              featured={product?.featured}
              diverseProduct={false}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default ListProduct;
