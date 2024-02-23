import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    mdiCalendarToday,
    mdiDotsVertical,
    mdiHomeAccount,
    mdiSpeedometer,
} from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import { mdiInformationOutline } from "@mdi/js";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import './Add.css'

const Add = () => {
    const profDropRef = useRef();
    const handleActiveDrop = () => {
        profDropRef.current.classList.toggle("activeProfDrop");
    };

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        catagory: [],
        brand: '',
        endirim: 0,
        satis: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'catagory') {
            // Split the comma-separated string into an array
            const categories = value.split(',');
            setFormData((prevState) => ({
                ...prevState,
                [name]: categories,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:7070/technical", formData);
            console.log("Ürün başarıyla eklendi.");
        } catch (error) {
            console.error("Ürün eklenirken bir hata oluştu:", error);
        }
    };

    return (
        <form style={{ margin: "200px auto 0 " }} onSubmit={handleSubmit} className="form-container">
            <label>
                Category:
                <input type="text" name="catagory" value={formData?.catagory?.join(',')} onChange={handleChange} className="input-field" />
            </label>
            <label>
                Brand:
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="input-field" />
            </label>
            <label>
                Image:
                <input type="text" name="image" value={formData.image} onChange={handleChange} className="input-field" />
            </label>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
            </label>
            <label>
                Sale:
                <input type="number" name="endirim" value={formData.endirim} onChange={handleChange} className="input-field" />
            </label>
            <label>
                Price:
                <input type="number" name="satis" value={formData.satis} onChange={handleChange} className="input-field" />
            </label>
            {/* <label>
                Stock:
                <input type="checkbox" name="stock" checked={formData.stock} onChange={() => setFormData(prevState => ({ ...prevState, stock: !prevState.stock }))} className="checkbox-field" />
            </label> */}
            <button type="submit" className="submit-button">Add Product</button>
        </form>
    );
};

export default Add;
