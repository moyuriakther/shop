import { useEffect } from "react";

const Rating = (props) => {
  const { value, text } = props;
  //   console.log(value, "value", text, "text");
  useEffect(() => {}, [value, text]);
  return (
    <div className="rating">
      <i
        className={
          value >= 1
            ? "fa-regular fa-start"
            : // : value >= 0.5
              // ? "fa-regular fa-star-half-stroke"
              "fa-sharp fa-regular fa-star"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fa-regular fa-start"
            : // : value >= 1.5
              // ? "fa-regular fa-star-half-stroke"
              "fa-sharp fa-regular fa-star"
        }
      ></i>
      <i
        className={
          value >= 3
            ? "fa-regular fa-start"
            : // : value >= 2.5
              // ? "fa-regular fa-star-half-stroke"
              "fa-sharp fa-regular fa-star"
        }
      ></i>
      <i
        className={
          value >= 4
            ? "fa-regular fa-start"
            : // : value >= 3.5
              // ? "fa-regular fa-star-half-stroke"
              "fa-sharp fa-regular fa-star"
        }
      ></i>
      <i
        className={
          value >= 5
            ? "fa-regular fa-start"
            : // : value >= 4.5
              // ? "fa-regular fa-star-half-stroke"
              "fa-sharp fa-regular fa-star"
        }
      ></i>
      <span> {text && text}</span>
    </div>
  );
};

export default Rating;
