import React, { createContext, useState } from "react";

export const DataContext = createContext();

const idUser = "6193d612096f9c0e80cfcf49";

export const DataProvider = ({ children }) => {
    const initialState = {
        user_info: idUser,
        github: "",
        description: "",
        technicalSkills: [],
        softSkills: [],
        lenguages: [],
        prev_studes: [],
        experience: [],
    };
    const [dataProfile, setDataProfile] = useState(initialState);
    const [dataUser, setDataUser] = useState({
        avatar: "",
        cohorte: { num: 1, name: "" },
        contactNumber: null,
        email: "",
        firstName: "",
        lastName: "",
        middleName: "",
        passwordHash: "",
        program: "Progamate",
        rol: 1,
        secondSurname: "",
        state: true,
        _id: idUser,
    });

    return (
        <DataContext.Provider
            value={{
                dataProfile,
                setDataProfile,
                dataUser,
                setDataUser,
                idUser,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};