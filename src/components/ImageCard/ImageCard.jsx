import style from "./ImageCard.module.css";

const ImageCard = ({ image, modalHandler }) => {
  return (
    <div className={style["image-card"]} onClick={() => modalHandler(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
