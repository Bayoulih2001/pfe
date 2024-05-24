export default function UpdateRéclamation(){
    return(
        <>
            <table cellSpacing="10">
                <tbody>
                    <tr>
                       <th>
                         <label>contact: </label>
                       </th> 
                       <td>
                         <input type="text" placeholder="contact"/>
                       </td>
                    </tr>
                    <tr>
                       <th>
                       <label>type: </label>
                       </th> 
                       <td>
                       <input type="text" placeholder="type"/>
                       </td>
                    </tr>
                    <tr>
                        <th>
                        <label>destinataire: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="destinataire"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>status: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="status"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>description: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="description"/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="right">
                        <button className="btn-add" >Update</button>
                        </td>
                    </tr>
                </tbody>
              </table>
        </>
    )
}