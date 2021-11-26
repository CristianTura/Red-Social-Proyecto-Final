import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Form_PersonalInfo from "../components/formInfo/Form_PersonalInfo";
import FormPhotoUser from "../components/formPhotoUser/FormPhotoUser";
import { ProfessionalInformation } from "../components/professionalInformation/ProfessionalInformation";
import { DataContext } from "../context/DataContext";
import { getDataAll, getData } from "../helpers/fetch";

const CompletePerfil = () => {
    const {
        idUser,
        email,
        setDataProfile,
        dataProfile,
    } = useContext(DataContext);
    const [status, setStatus] = useState(false);
    const [statusOff, setStatusOff] = useState(true);
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);

    // const auth = useSelector((state) => state.auth);

    // const token = useSelector((state) => state.token);
    // const { _id = "", email = "" } = auth.user && auth.user;

    // console.log(email, _id, "imprimiendo email y id");

    const getAllProfiles = async () => {
        const data = await getDataAll(`profiles`);

        data.map((value) => {
            setItems((items) => [...items, value]);
        });
    }

    useEffect(() => {
        getAllProfiles();
    }, []);

    const getUserInfo = async () => {
        const data = await getData(`users`, idUser);
        setUser(data);
    }

    useEffect(() => {
        getUserInfo();

    }, []);
    useEffect(() => {
        items.map((item) => {

            if (item.user_info?.email === email) {
                setStatus((status) => true);
                console.log("working 2");
            }

        });

    }, [setItems, items]);

    useEffect(() => {
        console.log(user)
        if (user?.rol === 0 || user?.state === false) {

            setStatusOff(false);
        }

    }, [user, items])

    useEffect(() => {
        setDataProfile({ ...dataProfile, user_info: idUser });
    }, [idUser]);

    //console.log(_id)
    //619e91439d72f976d888e360
    // console.log(idUser, email);
    return (
        <>
            {statusOff ? (
                status ? (
                    <Navigate replace to="/" />
                ) : (
                    <>
                        <FormPhotoUser />
                        <Form_PersonalInfo />
                        <ProfessionalInformation />
                    </>
                )
            ) : (
                <Navigate replace to="/dontallow" />
            )}
        </>
    );
};

export default CompletePerfil;
