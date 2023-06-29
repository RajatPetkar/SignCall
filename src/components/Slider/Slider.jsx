import SimpleImageSlider from "react-simple-image-slider";
import '../../App.css'

const images = [
  { url: "images/image1.webp" },
  { url: "images/image2.webp" },
  { url: "images/image3.webp" },
  { url: "images/image4.webp" },
  { url: "images/image5.webp" },
  { url: "images/image6.webp" },
];

const Slider = () => {
  return (
    <div className="slider-container">
      <SimpleImageSlider
        width={600}
        height={400}
        images={images}
        showBullets={true}
        autoPlay = {true}
        slideDuration={2}
        // showNavs={true}
      />
    </div>
  );
}

export default Slider