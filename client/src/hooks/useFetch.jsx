import { useState, useCallback } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/"; // Change to your API
// fetch(`${BASE_URL}posts`).then(res => res.json()).then(data => console.log(data));

export function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);

        const { method = "GET", body, headers = {} } = options;

        try {
            const res = await fetch(`${BASE_URL}${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    ...headers
                },
                body: body ? JSON.stringify(body) : undefined
            });

            const result = await res.json();            

            if (!res.ok) throw new Error(result.message || "API error");
            if (400 === res.status || 400 < res.status) throw Error(result.message || res.message);

            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    function get(endpoint) { return request(endpoint, { method: "GET" }); }
    function post(endpoint, body) { return request(endpoint, { method: "POST", body }); }
    function put(endpoint, body) { return request(endpoint, { method: "PUT", body }); }
    function del(endpoint) { return request(endpoint, { method: "DELETE" }); }

    return { data, error, loading, get, post, put, del };
}
