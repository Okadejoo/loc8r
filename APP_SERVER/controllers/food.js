const foodArray = new Array({name:'Pancakes',type:'Breakfast'},{name:'Chicken',type:'Lunch'},{name: 'Pizza',type:'Dinner'});
const  myFavFood = 'Moinmoin';


module.exports.foodList= function(req, res, next) {
    res.render('foodlist', {ffood: foodArray });  
};

module.exports.favouriteFood= function(req, res, next) {
    res.render('favourite-food', { foods: myFavFood });   

};