import { Link } from "react-router-dom"

export default function Objet_3wm() {
    return (
        <div>
        <h1>
           Objet_3wm
        </h1>
        <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>objet name</th>
              <th>default</th>
              <th>created by</th>
              <th>created at</th>
              <th>updated at</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>NOUVELLE FACTURE</td>
                  <td>1</td>
                  <td>admin</td>
                  <td>2024-03-17 10:15:06</td>
                  <td>2024-03-17 10:25:06</td>
                  <td className="button-group">
                      <Link className="btn-add" to="/objet_3wm/update">update</Link>
                      <Link className="btn-add">delete</Link>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
      </div>
    )
}