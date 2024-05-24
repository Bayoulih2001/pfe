import { useState } from "react";
//import axios from "axios";
/*import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
*/
export default function UpdateFacture() {

  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0});
  const [msg, setMsg] = useState(null);
  
  function handleUpload() {
    if (!files){
      setMsg("No file selected");
      return;
    }

    const fd = new FormData();
    for (let i=0; i<files.lenght ; i++ ){
      fd.append(`file${i+1}`, files[i]);
    }

    setMsg("uploading...");
    fetch('' ,  {
      method: "POST",
      body: fd,
      headers: {
        "custom-Header": "value",     
      }
    })
    .then(res => {
      if (res.ok) {
        throw new Error("Bad response");
      }
      setMsg("Uploaded successfully")
      console.log(res.data);      
    })
    .then(data => console.log(data))
    .catch(err => {
      setMsg("Upload failed")
      console.error(err);
    });


  }
    
   /* axios.post('http://httpin.org/post' , fd , {
      onUploadProgress: (progressEvent) => { setProgress(prevState => {
        return {...prevState, pc: progressEvent.progress*100 }
      }) },
      headers: {
        "custom-Header": "value",     
      }
    })
    .then(res => {
      setMsg("Uploaded successfully")
      console.log(res.data);      
    })
    .catch(err => {
      setMsg("Upload failed")
      console.error(err);
    });


  }*/
   /* const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [bordereau, setBordereau] = useState({
        reference: "",
        nature: "",
        status: false,
        folder: null,
        folder_url: null
    });

    const [error, setError] = useState("");
    const onFolderChoose = (ev) => {
        const file = ev.target.files[0];

       const reader = new FileReader();
       reader.onload = () => {
       setBordereau({
        ...bordereau,
        folder: file,
        folder_url: reader.result
      });
      ev.target.value = "";
      };

       reader.readAsDataURL(file);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
    
        const payload = { ...bordereau };
        if (payload.folder) {
          payload.folder = payload.folder_url;
        }
        delete payload.folder_url;
        let res = null;
        if (id) {
          res = axiosClient.put(`/bordereau/${id}`, payload);
        } else {
          res = axiosClient.post("/bordereau", payload);
        }
    
        res
          .then((res) => {
            console.log(res);
            navigate("/bordereau");
            if (id) {
              showToast("The bordereau was updated");
            } else {
              showToast("The bordereau was created");
            }
          })
          .catch((err) => {
            if (err && err.response) {
              setError(err.response.data.message);
            }
            console.log(err, err.response);
        });
    };

    const onDelete = () => {

    }
  
    useEffect(() => {
      if (id) {
        setLoading(true);
        axiosClient.get(`/bordereau/${id}`).then(({ data }) => {
          setBordereau(data.data);
          setLoading(false);
        });
      }
    }, []);
*/
    return (
        <>
        <table cellSpacing="10">
                <tbody>
                    <tr>
                       <th>
                         <label>Delai de paiement: </label>
                       </th> 
                       <td>
                         <input type="text" placeholder="delai de paiment"/>
                       </td>
                    </tr>
                    <tr>
                       <th>
                       <label>Numéro Facture: </label>
                       </th> 
                       <td>
                       <input type="text" placeholder="numéro de facture"/>
                       </td>
                    </tr>
                    <tr>
                        <th>
                        <label>Devise: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="devise"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label htmlFor="dateInput">Date de réception: </label>
                        </th>
                        <td>
                        <input type="date" id="dateInput" placeholder="Date de réception"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>upload document: </label>
                        </th>
                        <td>
                        <input onChange={ (e) => { setFiles(e.target.files)}} type="file" multiple/>
                        </td>
                        <td>  
                        <button onClick={ handleUpload} className="btn-add">upload document</button>
                        { /*progress.started && <progress max="100" value={progress.pc}></progress>}
                        { msg && <span>{msg}</span>*/}
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label htmlFor="dateInput">Date Facture: </label>
                        </th>
                        <td>
                        <input type="date" id="dateInput" placeholder="Date Facture"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>Montant: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="Montant"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>Objet: </label>
                        </th>
                        <td>
                        <input type="text" placeholder="nouvelle facture"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="right">
                        <button className="btn-add">Update</button>
                        </td>
                    </tr>
                </tbody>
              </table>
        </>
        
    )
}