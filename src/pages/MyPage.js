import React, { useState, useEffect } from "react";
import axios from "axios";

import UserInfo from "../components/UserInfo";

function MyPage(props){
    const [user, setUser] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/user/1")
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);

    return (
        <UserInfo props={user} />
    )
}

export default MyPage;