/* GET Homepage */

const index = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways - Contact'});
};
module.exports = {
    contact
};