import React, { useState } from 'react'

const City = ({cities}) => {

    const [count, setCount] = useState(1);
    
    // console.log(user.id);
  return (
    <div>
        <table border={"2px solid black"} align='center'>
            <thead>
                <tr>
                    <td>S.NO.</td>
                    <td>CITIES</td>
                </tr>
            </thead>
            <tbody>
            {
                cities.map((city, index) => (
            <tr key = {city}>
                <td>{index+1}</td>
                <td>{city.city}</td>
            </tr>
            ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default City