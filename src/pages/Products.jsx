import React, {useContext} from 'react';
import FilterBar from '../components/FilterBar';
import Table from "../components/Table";
import {DataContext} from "../context/DataContext";
import {useGetData} from "../hooks/api/useGetData";

const Products = () => {
    const type = 'products'
    const {filter, pageSize, page, setPage, filterCategory, externalFilter} = useContext(DataContext)
    const {data} = useGetData({type, pageSize, page, filterCategory, externalFilter});
    const filteredProducts = filter ? data?.filter(item =>
        item.title?.toLowerCase()?.includes(filter.toLowerCase())
        || item.brand?.toLowerCase()?.includes(filter.toLowerCase())
    ) : data;

    const tableProps = {
        'id': 'id',
        'Title': 'title',
        'Description': 'description',
        'Brand': 'brand',
        'Price': 'price',
        'Category': 'category',
    }

    const expernalFilterProps = {
        'Laptops': 'laptops',
    }

    return (
        <div className="page-container">
            <h1 style={{width: 160}}>{type}</h1>
            <FilterBar tableProps={expernalFilterProps} type={type}/>
            <Table type={type} dataSource={filteredProducts} tableProps={tableProps} setPage={setPage}
                   pageSize={pageSize}/>
        </div>
    );
};

export default Products;
