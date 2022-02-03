const index = function(req, res, next) {
  res.render('index', { title: 'Kadejo Tobiloba' });
};
module.exports = { index };