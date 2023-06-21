import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import Error from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location?.search ? location?.search.split("=")[1] : "/";
  const [register, { data, isLoading, isError, error, isSuccess }] =
    useRegisterMutation();

  useEffect(() => {
    if (data) {
      navigate(redirect);
    }
  }, [navigate, redirect, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    register({ name, email, password });
  };
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {isError && <Error variant="alert-danger">{error}</Error>}
        {isLoading && <Loading />}
        {isSuccess && (
          <div className={`alert-success`}>User Register Successfully</div>
        )}
        <form
          className="login col-11 col-md-8 col-lg-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Have An Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
