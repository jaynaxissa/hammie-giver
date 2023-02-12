import useFetch from "../../hooks/useFetch";
import "./ordercard.css";
import axios from "axios";

const OrderCard = () =>{
    const {data, loading, error} = useFetch()


    return(
        <div className="ordercard">
            <div className="oContainer">
            <span>Order has been purchased</span>
            </div>
        </div>
    )
}


export OrderCard  