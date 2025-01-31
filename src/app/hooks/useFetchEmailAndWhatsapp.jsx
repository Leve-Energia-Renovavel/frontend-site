import axios from "axios";
import { useEffect, useState } from "react";

const useFetchEmailAndWhatsapp = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const finalUrl = `https://api.allorigins.win/raw?url=${process.env.NEXT_PUBLIC_FETCH_WHATSAPP_EMAIL}`;
                const response = await axios.get(finalUrl);
                const parsedData = typeof response.data === "string" ? JSON.parse(response.data) : response.data;

                setData(parsedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetchEmailAndWhatsapp;
