import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import AdminHome from "../components/adminHome/AdminHome";
//import AdminNavbar from "../components/adminHome/adminNavbar/adminNavbar";
import Navbar from "../components/Navbar/Navbar";


const AdminHomePage = () => {
    return (
        <>

            <Navbar/>                        
            <AdminHome/>
            <Footer />
        </>
    );
};

export default AdminHomePage;
