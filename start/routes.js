const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/auth", "AuthController.authenticate");

Route.get("/show", "AuthController.show").middleware("auth");
Route.put("/changepass/:id", "AuthController.update").middleware("auth");

Route.group(() => {
  Route.resource("products", "ProductController").apiOnly();
}).middleware("auth");

Route.get("/product/search", "ProductController.search").middleware("auth");

Route.group(() => {
  Route.resource("provider", "ProviderController").apiOnly();
}).middleware("auth");

Route.group(() => {
  Route.resource("ticket", "TicketController").apiOnly();
}).middleware("auth");

Route.group(() => {
  Route.resource("order", "OrderController").apiOnly();
}).middleware("auth");

Route.group(() => {
  Route.resource("request", "ProductOrderController").apiOnly();
}).middleware("auth");

Route.post("/order/request/:id", "ProductOrderController.store").middleware("auth");
