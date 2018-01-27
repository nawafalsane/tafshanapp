/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'TafshanApp' });
};
module.exports = {
  index
};
