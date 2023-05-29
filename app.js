console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router")

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// app.use(
//    session({
//     secret: process.env.SESSION_SECRET,
//     COOKIE: {
//         MAXaGE: 1000 * 60 * 30, // FOR 30 minutes
//     },
//     store: store,
//     resave: true,
//     saveUninitialized: true,
//    })
// );


// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
// app.use("/resto", router_bssr); // anaviy 
app.use("/", router);           // react


module.exports = app;
