const Table = ({dataSource, tableProps, setPage, pageSize}) => {
    return (
        <>

            <table>
                <thead>
                <tr>
                    {Object.keys(tableProps).map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {dataSource.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(tableProps).map((column, colIndex) => (
                            <td key={colIndex}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <button className={'btn'} onClick={() => {
                    setPage(prev => prev - pageSize);
                }}>prev
                </button>
                <button className={'btn'} onClick={() => {
                    setPage(prev => prev + pageSize);
                }}>next
                </button>
            </div>
        </>
    );
};

export default Table;
