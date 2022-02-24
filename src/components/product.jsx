
import "./product.css";
import QuantityPicker from "./quantityPicker";
import "../services/dataService.js";
import { useState } from "react";

const Product = (props) => {
    const [quantity, setQauntity] = useState(1);
    
    const onQuantityChange = (value) => {
        setQauntity(value);
    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    };

    return(
        <div className="product">
            <img src={"/images/" + props.data.img} alt="Product" />
            <h5 className="title-name">{props.data.title}</h5>

            <div className="price-info">
                <label className="total">{getTotal()}</label>
                <label className="Price">${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange} />

            <button className="btn btn-sm btn-primary">Add to 🛒</button>
        </div>
    );
};

export default Product;