import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
// import About from 'src/pages/about';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route index  path="/*" element={<Dashboard />} />
                {/* <Route exact path="/about" element={<About />} /> */}
                {/* <Route exact path="/contact" element={<About />} /> */}
            </Routes>
        </Router>
    );
}

export default AppRouter;