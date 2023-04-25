import React, {useState, useEffect} from 'react'
import City from './City'
import User from './User'
import axios from 'axios'
import { server } from '../index'
import Loader from './Loader'

const Cities = ({ url }) => {

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const { data } = await axios.get(`${server}${url}`);
        // console.log(data);
        setCities(data);
        setLoading(false);
        // console.log(cities);
      }catch(err){
        console.log(err);
      }
    };
    fetchUsers();
  }, [url])

  return (
    <div>
      {
        loading ? <Loader /> :  <City cities = {cities} />
      }
    </div>
  )

}

export default Cities