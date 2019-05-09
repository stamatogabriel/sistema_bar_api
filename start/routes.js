const Route = use("Route");

Route.post("/auth", "AuthController.authenticate");

Route.post("/register", "AuthController.register");
Route.group(() => {
  // Route.post("/register", "AuthController.register");
  Route.get("/show", "AuthController.show");
  Route.get('/get_user', "AuthController.getUser");
  Route.put("/change_password", "AuthController.changePassword");
  Route.put("/reset_password/:id", "AuthController.resetPassword");
  Route.put("/logout", "AuthController.logout");
  Route.delete("/delete/:id", "AuthController.destroy");
}).middleware("auth");

Route.group(() => {
  Route.resource("products", "ProductController").apiOnly();
}).middleware(["auth"]);

Route.get("/product/search", "ProductController.search").middleware("auth");

Route.group(() => {
  Route.resource("provider", "ProviderController").apiOnly();
}).middleware("auth");

Route.group(() => {
  Route.resource("ticket", "TicketController").apiOnly();
}).middleware("auth");

Route.group(() => {
  Route.resource("order", "OrderController")
    .apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource("request", "ProductOrderController").apiOnly();
}).middleware("auth");

Route.post("/order/request/:id", "ProductOrderController.store").middleware(
  "auth"
);

Route.put("/pay/:id", "OrderController.payment").middleware("auth");

Route.get('/online/:id', 'OrderController.showOrder')
