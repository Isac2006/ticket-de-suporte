import { routes } from "../routes/index.js";

export function routeHandler(req, res) {
  if (res.writableEnded) return;

  const route = routes.find((route) => {
    return (
      route.method === req.method &&
      route.path === req.url
    );
  });

  if (route) {
    return route.controller(req, res);
  }

  res.statusCode = 404;
  return res.end("Not Found");
}
