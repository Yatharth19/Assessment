import React from 'react'

const User = ({users}) => {
    // console.log(user.id);
  return (
    <div>
        <table border={"2px solid black"} align='center'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>FIRST NAME</td>
                    <td>LAST NAME</td>
                    <td>EMAIL</td>
                    <td>GENDER</td>
                    <td>INCOME</td>
                    <td>CITY</td>
                    <td>CAR</td>
                    <td>QUOTE</td>
                    <td>PHONE PRICE</td>
                </tr>
            </thead>
            <tbody>
            {
                users.map((user) => (
            <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
            </tr>
            ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default User