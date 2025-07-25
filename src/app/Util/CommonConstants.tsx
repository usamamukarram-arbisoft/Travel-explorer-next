export const ROUTES = {
  home: { name: "Home", route: "/home" },
  blog: { name: "Blog", route: "/blogs" },
  profile: { name: "Your Profile", route: "/profile" },
  login: { name: "Login", route: "/login" },
};
export const NAVATIONMENU = [
  { name: ROUTES.home.name, href: ROUTES.home.route, current: true },
  { name: ROUTES.blog.name, href: ROUTES.blog.route, current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];
