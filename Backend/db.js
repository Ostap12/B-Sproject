
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();

DepartmentSchema.add({
    name: String,
    description: String
});
DepartmentSchema.virtual('id').get(function () {
    return this._id;
});

var DepartmentModel = mongoose.model('DepartmentModel', DepartmentSchema);
exports.DepartmentModel = DepartmentModel;

exports.create_department = function ( req, res){
    new DepartmentModel({
        name: req.body.name,
        description: req.body.description
    }).save(function(err, department){
        if(!err){
            console.log("Saved department" + department._id+ department.name);
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

exports.delete_department = function (req,res) {
DepartmentModel.remove({
    " _id": req.params.id}, function( err) {
        if(!err){
            console.log("Removed!");
        } else {
            console.log("Not Removed!");
        }res.status(200).send(err);
    });
};
exports.delete_all_departments = function (req,res) {
    DepartmentModel.remove({}, function(err) {
        if( err) {
            console.log("Can't delete all departments");
        }else{
            console.log("All departments are deleted");
        }res.status(200).send(err);
    });
};
exports.get_department_by_id = function(req,res) {
    DepartmentModel.findOne( {
       "_id": req.params.id
    }, function(err,department) {
        if(!err) {
            console.log("retrieved one department " + department._id);
            res.send(department);
        }
        else {
            console.log(" Department is not retrieved");
        }
    });
}

exports.get_department_by_name = function(req,res) {
    DepartmentModel.findOne( {
        "name": req.params.name
    }, function(err,department) {
        if(!err) {
            console.log("retrieved one department " + department.name);
            res.send(department);
        }
        else {
            console.log(" Department is not retrieved");
        }
        res.status(200).send(department);

    });
}
exports.get_department_by_description  = function(req,res) {
    DepartmentModel.findOne( {
        "description": req.params.description
    }, function(err,department) {
        if(!err) {
            console.log("retrieved one department " + department.description);
            res.send(department);
        }
        else {
            console.log(" Department is not retrieved");
        }
        res.status(200).send(department);

    });
}


 exports.update_department = function (req,res) {
     DepartmentModel.findOneAndUpdate({
         "_id": req.body._id
     }, { 
         name: req.body.name,
         desciption: req.body.description
     }, {
         upsert: false
     }, function (err, department) {
         if(err) {
             console.log("Did not update");
         } else { 
             console.log(req.body._id);
             console.log("Successfully updated department");
         }
         res.send(department);
     });
 };




