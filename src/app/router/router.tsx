import { createBrowserRouter } from "react-router-dom";
import { routes } from "./index.route";

export const ApplicationRouter = createBrowserRouter([...routes]);

export default ApplicationRouter;