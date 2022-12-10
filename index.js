const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const cookieSession = require("cookie-session");
const session = require('express-session');
const cookieParser = require("cookie-parser");

const { logger } = require('./middleware/logEvents');
const morgan = require('morgan');

const db = require("./models");
const Role = db.role ;
const User = db.user;
const mysqlStore = require('express-mysql-session')(session);

var corsOptions = {
  origin: "*",
  // origin: "http://localhost:3000",
  credentials: true
};

const sessionStore = new mysqlStore((db));

// db.sequelize.sync(
//      {force: true}
//     ).then(() => {
//         console.log('Drop and Resync Database!');
//         initial();
//     }).catch(err => {
//         console.log(err)
//     }
// );

app.use(cookieParser());
app.use(logger);
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: process.env.SESSION_COOKIE_NAME,
    secret: process.env.SESSION_COOKIE_SECRET,
    httpOnly: true,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    
    cookie: {
      sameSite: true,
        // maxAge: TWO_HOURS,
        // secure: IN_PROD
    }
}))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

require('./routes/auth.routes')(app);
require('./routes/users.routes')(app);
// require('./routes/comments.routes')(app);
// require('./routes/stories.routes')(app);
// require('./routes/relationships.routes')(app);
// require('./routes/likes.routes')(app);
// require('./routes/posts.routes')(app);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
   Role.create({
     id: 1,
     name: "user"
   });

   Role.create({
     id: 2,
     name: "admin"
   });

  }