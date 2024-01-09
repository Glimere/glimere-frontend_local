
export const logout = async () => {

  localStorage.setItem("hasFetchedCartData", "")
  console.log('logging out')
};

export default logout;