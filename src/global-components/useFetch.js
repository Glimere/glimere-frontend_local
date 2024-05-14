import { constants } from "./constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../slice/users/userSlice";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loggedinUser = useSelector(selectLoggedInUser)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${constants.url}${url}`,
        {
          headers: {
            Authorization: `Bearer ${loggedinUser?.jwt}`,
          },
        }
        );
        setData(response.data.data || []);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData()
  }, [url, loggedinUser.jwt]);

    return { data, loading, error };
};

export default useFetch;
