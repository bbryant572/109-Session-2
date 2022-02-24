import {useState} from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
    let [quantity, setQuanity] = useState(1);


    const handleIncrease = () => {
        let value  = quantity + 1;
        setQuanity(value);
        props.onChange(value);
    };

    const handleDecrease = () => {
        let value = quantity -1;
        if (value > 0) {
            setQuanity(value);
            props.onChange(value);
        }
    };

    return (
        <div className="quantity-picker">

            <button className="btn btn-sm btn-info" onClick={handleIncrease}>+</button>

            <label>{quantity}</label>
            
            <button className="btn btn-sm btn-info" disabled={quantity === 1} onClick={handleDecrease}>-</button>

        </div>
    );
}

export default QuantityPicker;