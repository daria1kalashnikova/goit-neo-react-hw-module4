import style from "./ImageGallery.module.css";
import ImageCard from "/src/components/ImageCard/ImageCard";

const ImageGallery = ({ images, modalHandler }) => {
  return (
    <ul className={style["image-gallery"]}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} modalHandler={modalHandler} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
