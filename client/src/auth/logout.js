export const logout = async () => {
  localStorage.removeItem("loggedin");
  console.log('logging out')
};

export default logout;
