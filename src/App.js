import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from './pages/Users';
import Products from './pages/Products';
import {DataProvider} from './context/DataContext';

const App = () => {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            </Router>
        </DataProvider>
    );
};

export default App;
