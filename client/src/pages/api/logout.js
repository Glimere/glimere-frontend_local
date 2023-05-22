import { useNavigate } from "react-router-dom";

// import { destroyCookie } from 'nookies'


export const logout = async () => {
  const navigate = useNavigate()
    try {
      await axios.get(`${constants.url}/api/logout`);
      navigate('/login');
    } catch (e) {
      console.log(e);
    }
//   destroyCookie({ res }, 'jwt', {
//     path: '/',
//   });

//   res.status(200).end();

localStorage.removeItem('user');
};


  