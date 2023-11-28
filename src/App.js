// import React from 'react'
// import Register from "./Pages/Register"
// import Login from './Pages/Login'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Login/>
//         <Routes>
//           <Route path="/" element={<Login />}/>
//           <Route path="/routes" element={<Register />}/>

//         </Routes>
//       </Router>
//       <Register/>
//       <Login/>
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navigation or other components that should appear on all routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add more Route components for other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
