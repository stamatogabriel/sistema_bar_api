const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/auth", "AuthController.authenticate");

Route.get("/show", "AuthController.show").middleware("auth");

Route.group(() => {
  Route.resource("products", "ProductController").apiOnly();
 }).middleware("auth");

 Route.get("/product/search", "ProductController.search").middleware('auth');

 Route.group(() => {
  Route.resource("provider", "ProviderController").apiOnly();
 }).middleware("auth");

 Route.group(() => {
  Route.resource("contact", "ContactProviderController").apiOnly();
 }).middleware("auth");
