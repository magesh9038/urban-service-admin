import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Dealter(params) {

  const [state, setstate] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:1000/api/admin').then(res => {
      setstate(res.data)
    }).catch(err => {
      console.log(err);
    })


  }, []);

  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Service Type</th>
            <th scope="col">MobileNo</th>
          </tr>
        </thead>
        <tbody>
          {state.map((res, i) => {
            return <tr>
              <th scope="row">{ i}</th>
              <td>{ res.Name}</td>
              <td>{ res.ServiceTypes}</td>
              <td>{ res.MobileNo}</td>
            </tr>
          })}

        </tbody>
      </table>
    </div>

  )
}
