/* GET Homepage */

const index = (req, res) => {
    res.render('news', { title: 'Travlr Getaways - News'});
};
module.exports = {
    news
};