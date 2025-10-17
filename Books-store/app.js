const authorsRoute = require('./routes/authorsRoutes');
const booksRoute = require('./routes/booksRoutes');
const usersRoute = require('./routes/usersRoutes');
const express = require('express');
const database = require('./utils/db');
//const { authMiddleware } = require('./middleware/auth.middleware');
const routes = require('./routes');
const connectDb = database.connectDatabase;
const app = express();

app.use(express.json()) ;// imp
const port = 5050;
const init = () => {
     app.listen(port, () => {
          console.clear();
          console.log(`Server started on port ${port}`);
     });
     app.use('/authors',authorsRoute);
     app.use('/books',booksRoute);
     app.use('/users',usersRoute);
}
connectDb(err=> {
  if (!err) {
    init();
  } else {
    console.log("Connection Error" + err);
  }
});
