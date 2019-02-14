const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/auth', 'AuthController.authenticate');
Route.get('/show', 'AuthController.show').middleware('auth');

Route.post('/product', 'ProductController.store').middleware('auth');
