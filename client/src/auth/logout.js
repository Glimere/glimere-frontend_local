export const logout = async () => {
  localStorage.removeItem("loggedin");
  localStorage.removeItem("jwt")
  console.log('logging out')
};

export default logout;
