import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Reclamation from "./views/Reclamation";
import BonDeCommande from "./views/BonDeCommande";
import Objet_3wm from "./views/Objet_3wm";
import Bordereau from "./views/Bordereau";
import Facture_3wm from "./views/Facture_3wm";
import BordereauForm from "./views/BordereauForm";

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children : [
            {
                path:'/objet_3wm',
                element: <Objet_3wm/>
            },
            {
                path:'/bordereau',
                element: <Bordereau/>
            },
            {
                path:'/facture_3wm',
                element: <Facture_3wm/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/bordereau/new',
                element: <BordereauForm />
            },
            {
                path:'/Réclamation',
                element: <Reclamation/>
            },
            {
                path:'/Bons_de_Commande',
                element: <BonDeCommande/>
            }

        ]
    },
    {
        path:'/',
        element: <GuestLayout/>,
        children: [
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },

        ]
    },
    {
        path:'*',
        element: <NotFound/>
    },

])

export default router;