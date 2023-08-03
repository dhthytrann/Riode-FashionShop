import "../TopBanner/TopBanner.scss";

const TopBanner = ({ page }) => {
  return (
    <div className="top-banner-categories">
      <div className="img-banner">
        <img src="/images/page-categories/top-banner/img.jpg" alt="" />
      </div>
      <div className="container">
        <div className="content">
          <div className="title mb-1">
            <p className="mb-2 shop-name">Spring Lifechic</p>
            <p className="mb-0">Sale</p>
          </div>
          <p className="sale mb-0"> - UP TO 50% OFF -</p>
          <div className="categories mt-3">
            <i class="fa-duotone fa-house"></i>
            <i class="fa-regular fa-chevron-right"></i>
            <p className="mb-0">Categories</p>
          </div>
        </div>
      </div>
      <div className="shape-bottom">
        <svg
          className="shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 170"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,101.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TopBanner;
