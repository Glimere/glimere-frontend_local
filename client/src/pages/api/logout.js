export const logout = async () => {
  localStorage.removeItem("user");
};

export default logout;
