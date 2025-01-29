import axios from "axios";
import { useEffect, useState } from "react";

const useFetchEmailAndWhatsapp = (fileUrl) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proxyUrl = "https://api.allorigins.win/raw?url=";
                const finalUrl = proxyUrl + encodeURIComponent(fileUrl);

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
    }, [fileUrl]);

    return { data, loading, error };
};

export default useFetchEmailAndWhatsapp;
