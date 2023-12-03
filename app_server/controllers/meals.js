/* GET Homepage */

const index = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways - Meals'});
};
module.exports = {
    meals
};