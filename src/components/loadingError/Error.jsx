const Error = (props) => {
  // console.log(props);
  const { children, variant } = props;
  return <div className={`alert ${variant}`}>{children}</div>;
};
Error.defaultProps = {
  variant: "alert-info",
};

export default Error;
