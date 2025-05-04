import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;