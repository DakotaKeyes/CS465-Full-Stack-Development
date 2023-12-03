/* GET Homepage */

const index = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways - Rooms'});
};
module.exports = {
    rooms
};