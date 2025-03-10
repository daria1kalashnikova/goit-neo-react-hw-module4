import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreHandle }) => {
  return (
    <div className={style["load-more-container"]}>
      <button onClick={loadMoreHandle} className={style["load-more"]}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
