import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.tsx";
import AuthorList from "./AuthorList.tsx";
import Fuse from "./AuthorItmes/Fuse.tsx";
import Kishimoto from "./AuthorItmes/Kishimoto.tsx";
import Tensura from "./AuthorItmes/FuseItems/Tensura.tsx";
import TensuraNiki from "./AuthorItmes/FuseItems/TensuraNiki.tsx";
import Naruto from "./AuthorItmes/KishimotoItmes/Naruto.tsx";
import Boruto from "./AuthorItmes/KishimotoItmes/Boruto.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <AuthorList />,
      },

      {
        path: "/author/Fuse",
        element: <Fuse />,
        children: [
          {
            path: "Tensura",
            element: <Tensura />,
            children: [
              {
                path: "chapter",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>목차</h3>
                    <span>1장</span>
                    <span>2장</span>
                    <span>3장</span>
                    <span>4장</span>
                  </div>
                ),
              },
              {
                path: "characters",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      등장인물
                    </h3>
                    <span>Rimuru Tempest</span>
                    <span>Romuru Tempest</span>
                  </div>
                ),
              },
            ],
          },
          {
            path: "Tensura-Niki",
            element: <TensuraNiki />,
            children: [
              {
                path: "chapter",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      전생슬 일기 목차
                    </h3>
                    <span>1장</span>
                    <span>2장</span>
                    <span>3장</span>
                    <span>4장</span>
                  </div>
                ),
              },
              {
                path: "characters",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      등장인물
                    </h3>
                    <span> 더 귀여운 Rimuru Tempest</span>
                    <span>Romuru Tempest</span>
                  </div>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "/author/Masashi_Kishimoto",
        element: <Kishimoto />,
        children: [
          {
            path: "Naruto",
            element: <Naruto />,
            children: [
              {
                path: "chapter",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      나루토 목차
                    </h3>
                    <span>1장</span>
                    <span>2장</span>
                    <span>3장</span>
                    <span>4장</span>
                  </div>
                ),
              },
              {
                path: "characters",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      나루토 등장인물
                    </h3>
                    <span> 사실 나루토에도 등장하는 Rimuru Tempest</span>
                    <span>Romuru Tempest</span>
                  </div>
                ),
              },
            ],
          },
          {
            path: "Boruto",
            element: <Boruto />,
            children: [
              {
                path: "chapter",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      보루토 목차
                    </h3>
                    <span>1장</span>
                    <span>2장</span>
                    <span>3장</span>
                    <span>4장</span>
                  </div>
                ),
              },
              {
                path: "characters",
                element: (
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 style={{ fontSize: "22px", margin: "12px" }}>
                      보루토 등장인물
                    </h3>
                    <span>우치하 로무루</span>
                    <span>오오츠츠키 리무루</span>
                  </div>
                ),
              },
            ],
          },
        ],
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
