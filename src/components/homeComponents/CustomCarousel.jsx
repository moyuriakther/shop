const CustomCarousel = (props) => {
  const { index, ...others } = props;
  return (
    <div {...others}>
      <h3>{index}</h3>
    </div>
  );
};

export default CustomCarousel;
