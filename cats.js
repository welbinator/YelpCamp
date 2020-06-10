const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/cat_app");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app");

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

const Cat = mongoose.model("Cat", catSchema);


/////// add cat to db

// const monte = new Cat({
//     name: "Swea",
//     age: 7,
//     temperment: "Evil"
// });

// monte.save(function (err, cat) {
//     if (err) {
//         console.log("error!");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// });

/////// another way to add a cat

// Cat.create({
//     name: "Sunny",
//     age: 15,
//     temperment: "Dead"
// }, function (err, cat) {
//     if (err) {
//         console.log("ERROR!!")
//         console.log(err);
//     } else {
//         console.log("new cat!!");
//         console.log(cat);
//     }
// })

/////// find cats in db

// Cat.find({}, function (err, cats) {
//     if (err) {
//         console.log("OH NO, ERROR");
//         console.log(err);
//     } else {
//         console.log("ALL THE CATS");
//         console.log(cats);
//     }
// })

/////// delete cat from db

// Cat.remove({ name: "Monte" }, function (err, cats) {
//     if (err) {
//         console.log("OH NO ERROR");
//         console.log(err)
//     } else {
//         console.log("HE GONE");

//     }
// })
