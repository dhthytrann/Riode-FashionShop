import "../Loader/Loader.scss";
import {
  ColorRing,
  FallingLines,
  InfinitySpin,
  MutatingDots,
  Oval,
  Rings,
  ThreeCircles,
} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-component">
      <Oval
        height={80}
        width={80}
        color="#2aa3fb"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#2aa3fb"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;

// #2aa3fb
