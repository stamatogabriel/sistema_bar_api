const Route = use("Route");

Route.post("/auth", "AuthController.authenticate");

Route.group(()=>{
Route.put("/logout", "AuthController.logout");
Route.put("/change_password", "AuthController.changePassword");
Route.get('/get_user', "AuthController.getUser");
}).middleware("auth");

Route.group(() => {
  Route.post("/register", "AuthController.register");
  Route.get("/show", "AuthController.show");
  Route.put("/reset_password/:id", "AuthController.resetPassword");
  Route.delete("/delete/:id", "AuthController.destroy");
}).middleware(["auth", "authManager"]);

Route.group(() => {
  Route.resource("products", "ProductController").apiOnly().except("show");
}).middleware(["auth", "authManager"]);

Route.get("products", "Productcontroller.show").middleware(["auth"]);

Route.get("/product/search", "ProductController.search").middleware("auth");

Route.group(() => {
  Route.resource("provider", "ProviderController").apiOnly();
}).middleware(["auth", "authManager"]);

Route.group(() => {
  Route.resource("ticket", "TicketController").apiOnly().except('store', 'destroy');
}).middleware("auth");

Route.group(() => {
  Route.post("ticket", "TicketController.store");
  Route.delete("ticket", "TicketController.delete");
}).middleware(["auth", "authManager"]);

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
