import React from "react";
import {
  Home,
  Search,
  RestaurantMenu,
  Login,
  Cart,
  Help,
  Register,
  Admin,
  Cartpayment,
  Order,
  Offer,
  Setting,
} from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Header } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const AppLaout = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="seprator">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLaout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/cart", element: <Cart /> },
      { path: "/admin", element: <Admin /> },
      { path: "/help", element: <Help /> },
      { path: "/order", element: <Order /> },
      { path: "/offer", element: <Offer /> },
      { path: "/setting", element: <Setting /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/search/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/payment", element: <Cartpayment /> },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  );
};

export default App;
