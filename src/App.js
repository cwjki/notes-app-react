import React from 'react';
import { Route, Routes,  } from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' exact element={<NotesListPage />}  />
                <Route path='/note/:id' element={<NotePage />} />
                <Route path="*" element={ <main style={{ padding: "1rem" }}>
                                            <p>There's nothing here!</p>
                                          </main>} />
            </Routes>
        </div>
    );
}

export default App;
