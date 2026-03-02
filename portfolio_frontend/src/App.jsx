import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
import Dashboard from './Components/Dashboard';
import { Suspense } from 'react';
import Authorization from './Pages/Authorization';
import ViewerProtectedRoute from './Utils/ViewerProtectedRoute';

const About = lazy(() => import('./Pages/About'));
const AccessibilityCheck = lazy(() => import('./Pages/AccessibilityCheck'));

function App() {

    return (
        <div id='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authorization />} />
                    <Route path='/Resume'  element={<ViewerProtectedRoute >
                                                        <Dashboard />
                                                    </ViewerProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App;