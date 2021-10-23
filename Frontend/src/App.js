import React from 'react';
import './App.css';
import AuthProvider from './Provider/AuthProvider';
import { AppRouter } from './routers/AppRouter';


function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}


export default App


