// import React from 'react';
// import Layout from './Layout';

// const App = () => {
//   return (
//     <Layout>
//       <h1 className="text-4xl font-bold">Main Content</h1>
//       <p className="mt-4">This is where the main content of your application will go.</p>
//     </Layout>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
