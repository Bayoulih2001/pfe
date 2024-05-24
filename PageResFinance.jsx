export default function(){
    return(
        <div className="card animated fadeInDown"> 
            <table>
              <thead>
                <tr>
                  <th>factname</th>
                  <th>dossier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn-add" onClick={handleButtonClick}>traiter</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}