import { useState } from "react";
import Header from "../components/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {/* {error && <Error variant="alert-danger">{error}</Error>}
        {loading && <Loading />} */}
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
            {/* <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}> */}
            Have An Account <strong>Login</strong>
            {/* </Link> */}
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
