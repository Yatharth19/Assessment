import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios'
import { server } from '../index'
import Loader from './Loader'

const Users = ({ url }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const { data } = await axios.get(`${server}${url}`);
        setUsers(data);
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    };
    fetchUsers();
  }, [url])

  return (
    <div>
      {
        loading ? <Loader /> :  <User users = {users} />
      }
    </div>
  )
}

export default Users