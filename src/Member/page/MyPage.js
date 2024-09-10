import React, { useState, useEffect } from "react";

import UserInfo from "../components/UserInfo";

function MyPage(props){
    useEffect(()=>{
        axios.get("user/1")
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);

    return (
        <UserInfo props={response} />
    )
}

export default MyPage;