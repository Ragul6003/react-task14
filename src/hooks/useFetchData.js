
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(url, {
                    signal: controller.signal
                });

                setData(response.data);

            } catch (err) {

                if (!axios.isCancel(err)) {
                    setError(
                        err.response?.data?.message ||
                        err.message ||
                        "Something went wrong"
                    );
                }

            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };

    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
