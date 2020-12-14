var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/url/id", (req, res, next) => {
    res.json(["Jaqoub","Hector","34","Masr","Nørrebro"]);
});

app.post("/url", (req, res,) =>{
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);

});
