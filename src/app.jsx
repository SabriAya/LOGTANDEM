import React from 'react';
import { RouterProvider} from 'react-router-dom';
import router from './routes/ConfigRouter';

function App() {
  return <RouterProvider router={router} />
}

export default App; 
