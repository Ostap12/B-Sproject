
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();

DepartmentSchema.add({
    id:Number,
    name: String,
    description: String
});
var DepartmentModel = mongoose.model('DepartmentModel', DepartmentSchema);
exports.DepartmentModel = DepartmentModel;

exports.create_department = function ( req, res){
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
    })
};
exports.show_all_departments  = function ( req, res) {
    DepartmentModel.find({}, function (err, departments) {
        if(err) {
            console.log("Nothing of departmens is retrieved");
        } else {
        }
        res.status(200).send(departments);
    });
};



