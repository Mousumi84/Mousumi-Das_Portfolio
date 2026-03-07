import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Suspense } from 'react';
import ViewerProtectedRoute from './Utils/ViewerProtectedRoute';
import ViwerLogin from './Pages/ViwerLogin';


function App() {

    return (
        <div id='App'>
                <Routes>
                    <Route path='/' element={<ViwerLogin />} />
                    <Route path='/Resume'  element={<ViewerProtectedRoute >
                                                        <Dashboard />
                                                    </ViewerProtectedRoute>} />
                </Routes>
        </div>
  )
}

export default App;