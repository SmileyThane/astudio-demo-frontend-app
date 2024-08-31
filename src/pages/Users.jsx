import React, {useContext} from 'react';
import FilterBar from '../components/FilterBar';
import Table from "../components/Table";
import {useGetData} from "../hooks/api/useGetData";
import {DataContext} from "../context/DataContext";

const Users = () => {
    const type = 'users'
    const {filter, pageSize, page, setPage, filterCategory, externalFilter} = useContext(DataContext)
    const {data} = useGetData({type, pageSize, page, filterCategory, externalFilter})
    const filteredUsers = !filterCategory && filter ? data?.filter(item =>
        item.firstName?.toLowerCase()?.includes(filter.toLowerCase())
        || item.lastName?.toLowerCase()?.includes(filter.toLowerCase())
    ) : data

    const tableProps = {
        'id': 'id',
        'First Name': 'firstName',
        'Last Name': 'lastName',
        'Maiden Name': 'maidenName',
        'Email': 'email',
        'Gender': 'gender',
        'Username': 'username',
        'Weight': 'weight',
        'Height': 'height',
        'Phone': 'phone',
        'Eye Color': 'eyeColor',
        'Birth Date': 'birthDate'
    }

    return (
        <div className="page-container">
            <h1 style={{width: 100}}>{type}</h1>
            <FilterBar type={type} tableProps={tableProps}/>
            <Table type={type} dataSource={filteredUsers} tableProps={tableProps} setPage={setPage}
                   pageSize={pageSize}/>
        </div>
    );
};

export default Users;
