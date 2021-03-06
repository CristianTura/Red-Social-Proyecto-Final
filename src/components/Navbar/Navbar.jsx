import React, { useContext, useEffect, useState } from "react";

import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import logoperfil from "../../assets/images/photoProfile.png";
import { BiGroup, BiMessageRoundedAdd } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineForum } from "react-icons/md";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import { useSelector } from "react-redux";
import { getData } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";



const Navbar = () => {

    // const { idUser } = useContext(DataContext);
    // //console.log(idUser)
    // const [user, setUser] = useState([]);
    // const [searchUrl, setsearchUrl] = useState([]);

    // useEffect(()=>{
    //     setsearchUrl(idUser)
    // } )


    // const userInfo = async () => {
        
    //     if(user.rol!=9){
    //     if(searchUrl) {
    //     const data = await getData("users", searchUrl);
    //     setUser(data);
    //     //console.log(user)
    //     }
    // }
    //   };


    // //  useEffect(() => {
    // //      userInfo() 
    // //  }, []);

    // userInfo()

    const { idUser } = useContext(DataContext);
    const [user, setUser] = useState([]);

    const [searchUrl, setsearchUrl] = useState([]);

    // useEffect(()=>{
    //     setsearchUrl(idUser)
    // } )


    const userInfo = async () => {      
        if(idUser) {
        const data = await getData("users", idUser);
        setUser(data);
        //console.log(user)      
    }};
    

      useEffect(()=>{
        userInfo() 
    }, [idUser] )  

    return (
        <header className={styles.globalNav}>
            <div className={styles.globalNavContent}>
                <nav className={styles.navBar}>
                    <Link to="/home">
                        <img
                            src={iconoEducamas}
                            alt="Prográmate"
                            className={styles.iconoEducamas}
                        />
                    </Link>
                    <ul className={styles.navList}>
                        <Link to="/home">
                            <li className={styles.navListItem}>
                                <BiHomeAlt size="30" />
                                <p>Home</p>
                            </li>
                        </Link>

                        {user.rol==9?
                            <Link to="/adminhome">
                            <li className={styles.navListItem}>
                                <BiGroup size="30" />
                                <p>Comunidad</p>
                            </li>
                        </Link>
                        :
                        <Link to="/community">
                            <li className={styles.navListItem}>
                                <BiGroup size="30" />
                                <p>Comunidad</p>
                            </li>
                        </Link>

                        }  

                        {/* <Link to="/community">
                            <li className={styles.navListItem}>
                                <BiGroup size="30" />
                                <p>Comunidad</p>
                            </li>
                        </Link> */}


                        <Link to="/questions">
                            <li className={styles.navListItem}>
                                <MdOutlineForum size="30" />
                                <p>Foro</p>
                            </li>
                        </Link>
                    </ul>
                    <div className={styles.containerPhoto}>
                        {/* <img
                            src={logoperfil}
                            alt="Prográmate"
                            className={styles.photoProfile}
                        /> */}
                        <DropdownLogOut />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
