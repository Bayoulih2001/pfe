import { Link } from "react-router-dom"

export default function Reclamation() {
    return (
        <div>
        <h1>
           Réclamation
        </h1>
        <br/>
        <Link className="btn-add" to="/réclamation/add">Ajouter réclamation</Link>
        <br/>
        <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>contact</th>
              <th>type</th>
              <th>destinataire</th>
              <th>status</th>
              <th>description</th>
              <th>created at</th>
              <th>updated at</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>amine</td>
                  <td></td>
                  <td></td>
                  <td>en cours</td>
                  <td></td>
                  <td>2024-03-23 14:10:20</td>
                  <td>2024-03-23 10:10:20</td>
                  <td className="button-group">
                      <Link className="btn-add" to="/réclamation/update">update</Link>
                      <Link className="btn-add">delete</Link>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
      </div>
    )
}