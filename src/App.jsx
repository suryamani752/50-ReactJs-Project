import { useRoutes } from "react-router-dom";
import "./App.css";
import Accordian from "./components/accordian";
import { Toaster } from "react-hot-toast";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import Home from "./pages/home";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/menus";
import QrCodeGenerator from "./components/qr-code-generator";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/accordian",
      element: <Accordian />,
    },
    {
      path: "/random-color",
      element: <RandomColor />,
    },
    {
      path: "/star-rating",
      element: <StarRating />,
    },
    {
      path: "/image-slider",
      element: <ImageSlider url={"https://picsum.photos/v2/list"} />,
    },
    {
      path: "/load-more-data",
      element: <LoadMoreData />,
    },
    {
      path: "/tree-view",
      element: <TreeView menus={menus} />,
    },
    {
      path: "/qr-code-generator",
      element: <QrCodeGenerator />,
    },
  ]);
  return element;
}

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <CustomRoutes />
    </>
  );
}

export default App;
