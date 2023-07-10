import "./styles.css";
import { NextUIProvider } from "@nextui-org/react";
import RoutesNavigation from "./router";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <RoutesNavigation />
      </NextUIProvider>
    </BrowserRouter>
  );
}
