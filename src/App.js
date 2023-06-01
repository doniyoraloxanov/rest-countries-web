import React from "react";
import CountriesListPage from "./pages/CountriesListPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import CountriesDetailPage from "./pages/CountriesDetailPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CountriesListPage />} />
      <Route path="details/:id" element={<CountriesDetailPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen  max-w-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
