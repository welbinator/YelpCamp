const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/yelpCamp");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");




//CREATE NEW CAMPGROUND
// Campground.create({
// 	name: "Moutain Goat's Rest",
// 	image:
// 		"https://pixabay.com/get/54e8d7464b5bab14f1dc84609620367d1c3ed9e04e50744075277fd09f4ec7_340.jpg",
// 	description: "This is a campground yo",
// },
// 	function (err, campground) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("Newly created campground")
// 			console.log(campground);
// 		}
// 	})



app.get("/", (req, res) => {
	res.render("landing");
});

//INDEX
app.get("/campgrounds", (req, res) => {
	Campground.find({}, (err, allCampgrounds) => {
		if (err) {
			console.log(err);
		} else {
			res.render("index", { campgrounds: allCampgrounds });
		}
	})

});

//CREATE
app.post("/campgrounds", (req, res) => {

	//get data from form and add to array
	const name = req.body.name;
	const image = req.body.image;
	const desc = req.body.description;
	const newCampground = { name: name, image: image, description: desc };
	Campground.create(newCampground, function (err, newlyCreated) {
		if (err) {

			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	})


});

//NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
	res.render("new.ejs");
});

//SHOW
app.get("/campgrounds/:id", (req, res) => {
	Campground.findById(req.params.id, (err, foundCampground) => {
		if (err) {
			console.log(err);
		} else {
			res.render("show", { campground: foundCampground })
		}
	})

})

app.listen(3000, "100.115.92.199", () => {
	console.log("Server is running");
});
