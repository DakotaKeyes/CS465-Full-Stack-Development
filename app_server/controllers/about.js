/* GET Homepage */

const index = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About"});
};
module.exports = {
    about
};