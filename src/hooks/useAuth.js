import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state.auth);
  const localAuth = JSON.parse(localStorage.getItem("auth"));
  // console.log(localAuth);
  if (auth?.accessToken && auth?.user) {
    return true;
  } else if (localAuth?.accessToken && localAuth.user) {
    return true;
  } else {
    return false;
  }
}
