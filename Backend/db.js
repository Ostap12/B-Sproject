
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();
var SubDepartmentSchema = new Schema();

var EndUserSchema = new Schema();
var DocumentSchema = new Schema();
var NewsItemSchema = new Schema();

DepartmentSchema.add({
    id: Number,
    name: String,
    description: String
});

SubDepartmentSchema.add({
    id: Number,
    name: String,
    description: String
});

EndUserSchema.add({
    id:Number,
    username: String,
    password: String,
    authphone: String,
    role: String,
    firstname: String,
    lastname: String,
    hometel: String,
    mobtel: String,
    address: String,
    zip: Number,
    city: String,
    country: String,
    dateOfBirth: Date,
    startofemployment: Date
});

NewsItemSchema.add({
    title: String,
    content: String,
    date: Date
});






var DepartmentModel = mongoose.model('DepartmentModel', DepartmentSchema);
var SudDepartmentModel = mongoose.model('SudDepartmentModel',SubDepartmentSchema);

var EndUserModel = mongoose.model('EndUserModel', EndUserSchema);
var NewsItemModel = mongoose.model('NewsItemModel', NewsItemSchema);


exports.DepartmentModel = DepartmentModel;
exports.SubDepartmentModel = SubDepartmentModel;
exports.EndUserModel = EndUserModel;
exports.NewsItemModel = NewsItemModel;
// Create department

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

//create subdepartment 
exports.create_subdepartment = function ( req, res){
    new SubDepartmentModel({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    }).save(function(err, subdepartment){
        if(!err){
            console.log("Saved sub-department" +subdepartment.id+ subdepartment.name);
            res.send(subdepartment);
        } else {
            console.log("Unknown error");
        }
    })
};
//create enduser 
exports.enduser = function ( req, res){
    new EndUserModel({
        id: req.body.id,
        username: req.body.username,
        password: req.body.password,
        authphone: req.body.authphone,
        role: req.body.role,
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        hometel: req.body.hometel,
        mobtel: req.body.mobtel,
        address: req.body.address,
        zip: req.body.zip,
        city:req.body.city,
        country: req.body.country,
        date:req.body.date,
        startofemployment: req.body.startofemployment
    }).save(function(err, enduser){
        if(!err){
            console.log("Saved enduser" +enduser.id+ enduser.username);
            res.send(enduser);
        } else {
            console.log("Unknown error");
        }
    })
};
//create newsitem 
exports.newsitem = function ( req, res){
    new NewsItemModel({
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
    date: req.body.date
    }).save(function(err, newsitem){
        if(!err){
            console.log("Saved newsitem" +newsitem.id+ newsitem.title);
            res.send(newsitem);
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




