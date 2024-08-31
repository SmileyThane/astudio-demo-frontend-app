import React, {createContext, useState} from 'react';

const DataContext = createContext(undefined);

const DataProvider = ({children}) => {
    const [filter, setFilter] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [externalFilter, setExternalFilter] = useState('');
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(0);

    return (
        <DataContext.Provider value={{
            filter,
            setFilter,
            pageSize,
            setPageSize,
            page,
            setPage,
            filterCategory,
            setFilterCategory,
            externalFilter,
            setExternalFilter
        }}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, DataContext};
