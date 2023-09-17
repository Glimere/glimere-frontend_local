import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/users/userSlice";

export const logout = async () => {

  const dispatch = useDispatch
  // dispatch(logoutUser)
  localStorage.setItem("hasFetchedCartData", "")
  console.log('logging out')
};

export default logout;