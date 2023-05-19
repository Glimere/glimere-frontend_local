import { useNavigate } from "react-router-dom";

// import { destroyCookie } from 'nookies'


export default async (req, res) => {
    const navigate = useNavigate();
//   destroyCookie({ res }, 'jwt', {
//     path: '/',
//   });

//   res.status(200).end();

sessionStorage.removeItem('jwt');

navigate('/login', { replace: true });

}