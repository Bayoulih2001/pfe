import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Bordereau() {
  const [bordereau, setBordereau] = useState([]);
  useEffect(()=>{
      getUsers();
  }, []);

  function getUsers(){
      axios.get('http://localhost/api/bordereau/').then(function(response){
         console.log(response.data);
         setUsers(response.data);
      })
  }

    const deleteBordereau = (id)=>{
      axios.delete(`http://localhost/api/dashboard/${id}/delete`).then(function(response){
          console.log(response.data);
          getUsers();
      })
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Link to="/Bordereau/new" className="btn-add">Add new bordereau</Link>
            </div>
            <div className="card animated fadeInDown">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Référence</th>
                    <th>Nature</th>
                    <th>Status</th>
                    <th>Numéro</th>
                    <th>Date de création</th>
                    <th>Actions</th>
                    <th>
                        <button rel="icon" href="/trash-icon.png"></button>
                    </th>
                  </tr>
                  <tbody>
                {bordereau.map((bordereau, key) =>
                    <tr key={key}>
                        <td>{bordereau.id}</td>
                        <td>{bordereau.name}</td>
                        <td>{bordereau.email}</td>
                        <td>{bordereau.mobile}</td>
                        <td>
                            <Link to={`bordereau/${bordereau.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <button onClick={()=> deleteBordereau(bordereau.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
                </thead>
              </table>
            </div>
        </div>
    )
}