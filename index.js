const express = require("express");
const getWeek = require("./getWeek");
const app = express();
const port = 3000;
var cors = require("cors");
const getDay = require("./getDay");
const getToday = require("./getToday");
var firebase = require("firebase");

firebase.initializeApp({
    apiKey: "AIzaSyCNBcLGHvEs5JAFc0XSGbNBanyi-kKhw2g",
    authDomain: "fir-test-5d0fa.firebaseapp.com",
    projectId: "fir-test-5d0fa",
    storageBucket: "fir-test-5d0fa.appspot.com",
    messagingSenderId: "243559034407",
    appId: "1:243559034407:web:e7f653ecfbc3a33fc0e802",
    measurementId: "G-LBTESEHKJV",
});

const db = firebase.firestore();

app.use(cors());

app.get("/getWeek", (req, res) => {
    getWeek(req, res, db);
});

app.get("/getToday", (req, res) => {
    getToday(req, res, db);
});

app.get("/getDay", (req, res) => {
    getDay(req, res, db);
});

app.get("/", (req, res) => {
    res.send("chantina.no!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
