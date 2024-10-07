import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import CatergoryPages from "./pages/CatergoryPages/CatergoryPages";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <CatergoryPages />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
