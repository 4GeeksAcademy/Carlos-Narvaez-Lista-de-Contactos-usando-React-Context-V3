import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
//import { Info } from "./pages/Info.jsx";
import { Contact } from "./pages/Contact.jsx";
import { AddContact } from "./pages/AddContact.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} /> 
        <Route path="/demo" element={<Demo />} />
        {/*<Route path="/info" element={<Info />} />*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/add_contact" element={<AddContact />} />
        <Route path="/edit_contact/:id" element={<AddContact />} />
      </Route>
    )
);