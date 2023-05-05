import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";
import Error from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

const Login = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location?.search ? location?.search.split("=")[1] : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, isLoading, isError, error }] = useLoginMutation();
  console.log(data);
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [redirect, navigate, userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {isError && <Error variant="alert-danger">{error}</Error>}
        {isLoading && <Loading />}
        <form
          className="login col-11 col-md-8 col-lg-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
