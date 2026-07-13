import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateProduct } from "../utils/validateProduct";
import "./ProductFormContainer.css"
import { ProductFormUI } from "./ProductFormUI";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);

    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description:"",
    });

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setProduct({...product, [name]:value });
    };

    const handelFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setLoading(true);

        const newErrors = validateProduct({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = await uploadImage(file);

            const productData = {
                ...product,
                price: Number(product.price),
                Image: imageUrl,
            };

            const id = await createProduct(productData);
            //Limpiamos los estados
            setProduct({ 
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setFile(null);
            navigate(`/success/${id}`, {replace: true });

        } catch (error) {
            setErrors({ general: error.message });
        } finally{
            setLoading(false);
        }
    };

    return (
        <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={handelFileChange}
        onSubmit={handelSubmit}
        />
    );
};