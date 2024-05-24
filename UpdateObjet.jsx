export default function UpdateObjet(){

    return (
        <div>
           <table cellSpacing="10">
                <tbody>
                    <tr>
                       <th>
                         <label>objet name: </label>
                       </th> 
                       <td>
                         <input type="text" placeholder="objet name"/>
                       </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="right">
                        <button className="btn-add">Update</button>
                        </td>
                    </tr>
                </tbody>
              </table>
        </div>
    )
}