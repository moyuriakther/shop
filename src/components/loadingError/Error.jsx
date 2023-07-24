const Error = (props) => {
  console.log(props);
  const { children, variant } = props || {};
  return (
    <div className={`alert ${variant}`}>
      {children?.data?.message
        ? children?.data?.message
        : "something is wrong !! try again latter"}
    </div>
  );
};
Error.defaultProps = {
  variant: "alert-info",
};

export default Error;
