import React, { useState, useEffect } from "react";

function MyPage(props){
    const [user, setUser] = useState();

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
        <div>
        </div>
    )
}

export default MyPage;