import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ errorMessage }) => {
  return <p className={style["error-message"]}>{errorMessage}</p>;
};

export default ErrorMessage;
