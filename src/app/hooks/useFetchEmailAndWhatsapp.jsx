import axios from "axios";
import { useEffect, useState } from "react";
import dados from '../../../public/dados.json'

const useFetchEmailAndWhatsapp = () => {
    const [data, setData] = useState(dados);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const finalUrl = `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_FETCH_WHATSAPP_EMAIL}`;
                const response = await axios.get(finalUrl);
                const parsedData = typeof response.data === "string" ? JSON.parse(response.data) : response.data;

                setData(parsedData);
            } catch (err) {
                setError(err.message);
                console.error(err)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetchEmailAndWhatsapp;
