import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import CatergoryPages from "@pages/CatergoryPages/CatergoryPages.jsx";
import ProfilePage from "@pages/ProfilePage/ProfilePage";
import CartPage from "@pages/CartPage/CartPage";
import { QueryClientProvider ,QueryClient } from "@tanstack/react-query";

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

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
