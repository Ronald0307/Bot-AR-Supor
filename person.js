const mongoose = require ('mongoose')
const Person= mongoose.model('Person',{
    name:String,
    idade:Number,
    approved: Boolean,
})

module.exports= Person