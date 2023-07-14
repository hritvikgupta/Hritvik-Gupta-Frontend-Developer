import { BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./components";
import useRoutes from './hooks/useRoutes';
import AuthProvider from "./Contexts/AuthProvider";
function App() {
  const routes = useRoutes();

  return (
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
