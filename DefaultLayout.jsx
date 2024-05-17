import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";
import { useState } from "react";

export default function DefaultLayout() {
    const [showList, setShowList] = useState(false);

    const handleMouseEnter = () => {
        setShowList(true);
    };

    const handleMouseLeave = () => {
        setShowList(false);
    };

    const { user, token, setToken, setUser } = useStateContext()

 /*   if (!token) {
        return <Navigate to="/login" />
    } 

 */ 
    
    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])
    return (
        <div id="defaultLayout">
            <aside>
                <div className="horizontal-container">
                   <img src="tunisie-telecom-logo.png" width={100} height={50} position="center" />
                   <div className="separatorHorizental"></div>
                   <div style={{ color: 'white', width:'5px'}}>DCF</div>
                </div>
                <br/>
                <div className="separatorVertical"></div>
                <Link to="dashboard">Dashboard</Link>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ color: 'white', padding: '15px', display: 'inline-block' }}
                >
                    Factures
                    {showList && (
                        <ul>
                        <div>
                          <Link to="/facture_3wm" style={{ textDecoration: 'none' , color: 'white' }}>facture_3wm</Link>
                        </div>
                        <br/>
                        <div>
                          <Link to="/objet_3wm" style={{ textDecoration: 'none', color: 'white' }}>objet_3wm_tn</Link>
                        </div>
                        <br/>
                        <div>
                          <Link Navigate to="/bordereau" style={{ textDecoration: 'none', color: 'white' }}>bordereau</Link>
                        </div>
                      </ul>
                    )}
                </div>
                <Link to="/Réclamation">Réclamation</Link>
                <Link to="/Bons_de_Commande">Bons de commande</Link> 
                <Link to="/login" className="btn-logout"> Logout</Link>
            </aside>
            <div className="content">
                <header>
                    <div className="left">
                        <div className="horizontal-container">
                            <div className="element1">{user.name}</div>
                            <div className="separator"></div>
                            <div className="element2">
                                <div className="circle-container">
                                    <img src="user-icon.jpg" className="circle-image" />
                                </div>
                            </div>
                        </div>                        
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}