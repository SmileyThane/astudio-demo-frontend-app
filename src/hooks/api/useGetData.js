import axios from "axios";
import {useEffect, useState} from "react";

export const useGetData = ({type, pageSize, page, filterCategory, externalFilter}) => {
    const [data, setData] = useState([])
    try {

        useEffect(() => {
            let uri = `https://dummyjson.com/${type}?limit=${pageSize}&skip=${page}`;

            if (filterCategory) {
                uri = `https://dummyjson.com/${type}/filter?key=${filterCategory}&value=${externalFilter}&limit=${pageSize}&skip=${page}`;
            }

            if (filterCategory === 'laptops') {
                uri = `https://dummyjson.com/${type}/category/laptops?limit=${pageSize}&skip=${page}`;
            }

            axios.get(uri).then(response => {
                if (response.data) {
                    setData(response.data[type])
                }
            });
        }, [type, pageSize, page, filterCategory, externalFilter]);
    } catch (error) {
        console.error(`Failed to fetch ${type}:`, error);
    }

    return {data}
};

