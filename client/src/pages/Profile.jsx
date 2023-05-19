import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const { isAuthenticated, logout } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get('http://localhost:1337/users/me', {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          setUser(data);
        } catch (e) {
          console.log(e);
        }
      };

      fetchUser();
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) {
    return null; // Render loading state or redirect
  }

  const { email, username } = user;

  return (
    <div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;