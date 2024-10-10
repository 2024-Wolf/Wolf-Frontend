import axios from "axios";
import { BASE_URL, accessToken } from "./Common";

export function registerGroupPost(groupPost){
    axios.post(`${BASE_URL}/post`,{
        
    },{
        headers: {
            Authorization: accessToken
        }
    })
}