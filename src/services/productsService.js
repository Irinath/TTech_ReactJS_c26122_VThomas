import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    where,
    query,
} from "firebase/firestore";

import { db } from "../firebase/config";

const productsRef = collection(db, "products");
//lógica de negocio
//Listar productos
export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });

        return productsFormat;
    } catch (error) {
        console.error("Error al traer productos", error)

        return [];

    }
};

//Listar producto x ID
export const getProductById = async (id) => {
    try {
        //creamos la referencia al objeto
        const productRef = doc(db, "products", id);

        //Traemos el documento de la Base de datos
        const snapshot = await getDoc(productRef);

        //Verificamos si existe
        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() };
            console.log("Doc:", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al traer producto por ID: ", error);
        return null;
    }
};

//Filtro por categoría
export const getByCategory = async (category) => {
    try {
        let queryRef;

        if (category) {
            queryRef = query(productsRef, where("category", "==", category));
        } else {
            queryRef = productsRef;
        }

        //Traer los documentos:
        const snapshot = await getDocs(queryRef);
        //Mapeo los datos para formatear
        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return productsFormat;
    } catch (error) {
        console.error("Error al filtrar productos:", error);
        return [];
    }
};


//Crear producto nuevo
export const createProduct = async (productData) => {
    try {
        //Se usa la función addDoc y se pasa la colección y el doc a agregar
        const docRef = await addDoc(productsRef, productData);

        return docRef.id; //opcional para usar el ID para algo
    } catch (error) {
        console.error("Error al crear producto:", error);
        throw error;
    }
};