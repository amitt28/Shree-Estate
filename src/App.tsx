import React from 'react';
import AppRouter from './routes/App-router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    

);

export default App;
