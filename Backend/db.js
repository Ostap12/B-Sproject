
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();

DepartmentSchema.add({
    id: Number,
    name: String,
    description: String
});

var DepartmentModel = mongoose.model('DepartmentModel', DepartmentSchema);
exports.DepartmentModel = DepartmentModel;

exports.create_department = function ( req, res){
    new DepartmentModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    }).save(function(err, department){
        if(!err){
            console.log("Saved department" + department.id+ department.name);
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
    "id": req.params.id}, function( err) {
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
       "id": req.params.id
    }, function(err,department) {
        if(!err) {
            console.log("retrieved one department " + department.id);
            res.send(department);
        }
        else {
            console.log(" Department is not retrieved");
        }
    });
}

exports.get_department_by_name = function(req,res) {
    DepartmentModel.find( {
        "name": req.params.name
    }, function(err,department) {
        if(err) {
            res.status(500).send(err);
        }
        else {
            console.log(" Department is not retrieved");
        }
        res.status(200).send(department);

    });
}
exports.get_department_by_description  = function(req,res) {
    DepartmentModel.find( {
        "description": req.params.description
    }, function(err,department) {
        if(err) {
            console.log("retrieved one department " );
            res.status(500).send(err);
        }
        else {
            console.log(" Department is not retrieved");
        }
        res.status(200).send(department);

    });
}


 exports.update_department = function (req,res) {
     DepartmentModel.findOneAndUpdate({
         "id": req.body.id
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




