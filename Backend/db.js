
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();

DapertmentSchema.add({
    id:Number,
    name: String,
    description: String
});
var DepartmentModel = mongoose.model('DepartmentModel', DapertmentSchema);
exports.DepartmentModel = DepartmentModel;

exports.create = function ( req, res){
    new DepartmentModel({
        title: req.body.title,
        description: req.body.desciption
    }).save(function(err, department){
        if(!err){
            console.log("Saved department" + department._id);
            res.send(department);
        } else {
            console.log("Unknown error");
        }
    });
};



