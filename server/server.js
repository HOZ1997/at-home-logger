const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const inventoryRouter = require('./routes/inventory.router');
const categoryRouter = require('./routes/category.router');
const locationRouter = require('./routes/location.router');
const statusRouter = require('./routes/status.router');
const packagingRouter = require('./routes/packaging.router');
//const addingitemRouter = require('./routes/addingitem.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/category', categoryRouter);
app.use('/api/location', locationRouter);
app.use('/api/status', statusRouter);
app.use('/api/packaging', packagingRouter);
//app.use('/api/add', addingitemRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
