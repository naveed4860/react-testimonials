import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Testimonials from "./components/testimonials/Testimonials";

export interface IRoute {
  title: string;
  path: string;
  page: React.ReactElement;
  exact?: boolean;
}

export const routes: IRoute[] = [
  {
    title: "Home",
    path: "/",
    page: <Home />,
    exact: true,
  },
  {
    title: "About",
    path: "/about",
    page: <About />,
    exact: true,
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    page: <Testimonials />,
    exact: true,
  },
];
