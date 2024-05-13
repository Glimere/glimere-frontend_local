import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    setError(error)
    console.error(error)
  }
  // localStorage.setItem("hasFetchedCartData", "")
  console.log('logging out')
};

export default logout;