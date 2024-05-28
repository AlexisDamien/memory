import { RouterProvider } from "react-router-dom";
import ApplicationRouter from "./router/router";
import React from "react";

const App: React.FC = () => {
    return <RouterProvider router={ApplicationRouter} />;
};

export default App;
