const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({ 
    name: {type: String  , Required: true, min: 3 }, type: {type: String  , Required: true }
});


mongoose.model('Food', 'foodSchema', 'foods');