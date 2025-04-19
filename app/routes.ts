import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "about",
    file: "routes/about.tsx",
  },
  {
    path: "contact",
    file: "routes/contact.tsx",
  },
  {
    path: "gesture",
    file: "routes/gesture.tsx",
  },
  {
    path: "basics",
    file: "routes/basic.tsx",
  },
  {
    path: "adavus",
    file: "routes/adavus.tsx",
  },
  {
    path: "mudras_bhedas",
    file: "routes/mudras_bhedas.tsx",
  },
  {
    path: "videos",
    file: "routes/videos.tsx",
  },
  {
    path: "gallery",
    file: "routes/gallery.tsx",
  },
  {
    path: "description/:postId",
    file: "routes/description.tsx",
  },
] satisfies RouteConfig;
