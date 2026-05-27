import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/config";

const productRef = collection(db, "products");
 //lógica de negocio

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return{id: doc.id, ...doc.data()}
        });

        return productsFormat
    } catch (error) {
        console.error("Error al traer productos", error)

        return [];
        
    }
};