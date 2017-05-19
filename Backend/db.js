var fs = require('graceful-fs');
var mongoose=require('mongoose'),Schema=mongoose.Schema,passportLocalMongoose=require('passport-local-mongoose');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;

connection = mongoose.connect('mongodb://localhost/test');
//Block for savind a  document 

var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var DepartmentSchema = new Schema();
var SubDepartmentSchema = new Schema();

var EndUserSchema = new Schema();
//EndUserSchema.plugin(passportLocalMongoose);
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
//    id:Number,
 //   username: String,
    employee_id: { type: String,unique: true, required : true, dropDups: true  },
    password: { type: String, unique: true,required : true, dropDups: true  },
    email: String,
    authphone: String,
    position: String,
    username: String,
    address: String,
    postal_code: String,
   
    place: String
    
});

EndUserSchema.plugin(passportLocalMongoose);


NewsItemSchema.add({
    title: String,
    content: String,
    date: Date
});

exports.putDoc = function(path, name, callback){
    var writestream = gfs.createWriteStream({
        filename:name
    });
    writestream.on('close',function(files) {
        callback(null,file);
    });
    fs.createReadStremPath(path).pipe(writestream);
}
exports.getDoc = function(name,callback){
    var fs_write_stream = fs.createWriteStream(name);
    var read_stream = gfs.createReadStream({
        filename:name
    });
    read_stream.pipe(fs_write_stream);
    fs_write_stream.on('close',function() {
        calback(null);
        console.log("File has been written successfully");
    });
}




var DepartmentModel = mongoose.model('DepartmentModel', DepartmentSchema);
var SudDepartmentModel = mongoose.model('SudDepartmentModel',SubDepartmentSchema);

var EndUserModel = mongoose.model('EndUserModel', EndUserSchema);
var NewsItemModel = mongoose.model('NewsItemModel', NewsItemSchema);


exports.DepartmentModel = DepartmentModel;
//exports.SubDepartmentModel = SubDepartmentModel;
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
exports.create_enduser = function (req, res){
    new EndUserModel({
    employee_id:req.body.employee_id,
    password: req.body.password,
    email: req.body.email,
    authphone: req.body.authphone,
    position: req.body.position,
    username: req.body.username,
    address: req.body.address,
    postal_code: req.body.postal_code,
    place: req.body.place
    
    }).save(function(err, enduser){
        if(!err){
            console.log("Saved enduser"+enduser._id + enduser.name + enduser.email+ enduser.authphone+ enduser.position+enduser.address+ enduser.place);
            res.send(enduser);
        } else {
            console.log(err);
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


//show all departments 
exports.show_all_departments  = function ( req, res) {
    DepartmentModel.find({}, function (err, departments) {
        if(err) {
            console.log("Nothing of departmens is retrieved");
        } else {
        }
        res.status(200).send(departments);
    });
};

//show all subdepartments 
exports.show_all_subdepartments  = function ( req, res) {
    SubDepartmentModel.find({}, function (err, subdepartments) {
        if(err) {
            console.log("No one of the subpedartments are retrieved ");
        } else {
        }
        res.status(200).send(subdepartments);
    });
};

//show all endusers 
exports.show_all_endusers  = function ( req, res) {
    EndUserModel.find({}, function (err, endusers) {
        if(err) {
            console.log("No one of the endusers are retrieved ");
        } else {
        }
        res.status(200).send(endusers);
    });
};

//show all newsitems 
exports.show_all_newsitems = function ( req, res) {
    NewsItemModel.find({}, function (err, newsitems) {
        if(err) {
            console.log("No one of the newsitems are retrieved ");
        } else {
        }
        res.status(200).send(newsitems);
    });
};

// show all sorted users by name 


exports.showSortedEndUserByUsernameAsc = function (req, res) {
        console.log("Storing works");
            EndUser.find({}).sort({
                        'username': 1
                                }).exec(function (err, endusers) {
                        if (err) {
                            console.log("Not retieved endusers")
                                }else {
                                }
                        res.status(200).send(endusers);
            });
}



// show all sorted users by city 


exports.showSortedEndUserByCountryAsc = function (req, res) {
        console.log("Storing works");
            EndUser.find({}).sort({
                        'city': 1
                                }).exec(function (err, endusers) {
                        if (err) {
                            console.log("Not retieved endusers")
                                }else {
                                }
                        res.status(200).send(endusers);
            });
}
// show all sorted users by firstname and secondname 


exports.showSortedEndUserByFirstAndSecondName = function (req, res) {
        console.log("Storing works");
            EndUser.find({}).sort({
                        'firstname': 1,'secondname':2
                                }).exec(function (err, endusers) {
                        if (err) {
                            console.log("Not retieved endusers")
                                }else {
                                }
                        res.status(200).send(endusers);
            });
}




// show all news items by date


exports.showNewsItemsByDate = function (req, res) {
        console.log("Storing works");
            NewsItem.find({}).sort({
                        'date': 1
                                }).exec(function (err, newsitems) {
                        if (err) {
                            console.log("Not retieved newsitems")
                                }else {
                                }
                        res.status(200).send(newsitems);
            });
}


// show all news items by date


exports.showNewsItemsByTitle = function (req, res) {
        console.log("Storing works");
            NewsItem.find({}).sort({
                        'title': 1
                                }).exec(function (err, newsitems) {
                        if (err) {
                            console.log("Not retieved newsitems")
                                }else {
                                }
                        res.status(200).send(newsitems);
            });
}

exports.get_enduser_by_id = function(req,res) {
    EndUserModel.findOne( {
       "id": req.params.id
    }, function(err,enduser) {
        if(!err) {
            console.log("retrieved one enduser " + enduser._id);
            res.send(enduser);
        }
        else {
            console.log("Enduser is not retrieved");
        }
    });
}

exports.get_enduser_by_password = function(req,res) {
    EndUserModel.findOne({
       "password": req.params.password
    }, function(err,enduser) {
        if(!err && !enduser) {
            console.log("retrieved one enduser " + enduser.id);
            res.send(enduser);
        }
        else {
            console.log("Enduser is not retrieved");
        }
    });
}


exports.get_newsitem_by_id = function(req,res) {
    NewsItemModel.findOne( {
       "id": req.params.id
    }, function(err,newsitem) {
        if(!err) {
            console.log("retrieved one newsitem " + newsitem.id);
            res.send(newsitem);
        }
        else {
            console.log("NewsItem is not retrieved");
        }
    });
}


exports.get_subdepartment_by_id = function(req,res) {
    SubDepartmentModel.findOne( {
       "id": req.params.id
    }, function(err,subdepartment) {
        if(!err) {
            console.log("retrieved one subdepartment " + subdepartment.id);
            res.send(subdepartment);
        }
        else {
            console.log("Subdepartment is not retrieved");
        }
    });
}








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

exports.delete_subdepartment = function (req,res) {
SubDepartmentModel.remove({
    "id": req.params.id}, function( err) {
        if(!err){
            console.log("Removed!");
        } else {
            console.log("Not Removed!");
        }res.status(200).send(err);
    });
};
exports.delete_enduser = function (req,res) {
EndUserModel.remove({
    "id": req.params.id}, function( err) {
        if(!err){
            console.log("Removed!");
        } else {
            console.log("Not Removed!");
        }res.status(200).send(err);
    });
};

exports.delete_newsitem = function (req,res) {
NewsItemModel.remove({
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


 exports.update_subdepartment = function (req,res) {
     SubDepartmentModel.findOneAndUpdate({
         "id": req.body.id
     }, { 
         name: req.body.name,
         desciption: req.body.description
     }, {
         upsert: false
     }, function (err, subdepartment) {
         if(err) {
             console.log("Did not update");
         } else { 
             console.log(req.body._id);
             console.log("Successfully updated department");
         }
         res.send(subdepartment);
     });
 };


 exports.update_newsitem = function (req,res) {
     NewsItemModel.findOneAndUpdate({
         "id": req.body.id
     }, { 
         title: req.body.title,
         content: req.body.content,
         date: req.body.date
     }, {
         upsert: false
     }, function (err, newsitem) {
         if(err) {
             console.log("Did not update");
         } else { 
             console.log(req.body._id);
             console.log("Successfully updated newsitem");
         }
         res.send(newsitem);
     });
 };


 exports.update_enduser = function (req,res) {
     EndUserModel.findOneAndUpdate({
         "id": req.body.id
     }, { 
         username:req.body.username,
         password: req.body.password,
         authphone: req.body.authphone,
         role: req.body.role,
         lastname: req.body.lastname,
         hometel: req.body.hometel,
         mobtel: req.body.mobtel,
         address: req.body.address,
         zip: req.body.address,
         city: req.body.city,
         country: req.body.country,
         dateOfBirth: req.body.dateOfBirth,
         startofemployment: req.body.startofemployment
     }, {
         upsert: false
     }, function (err, enduser) {
         if(err) {
             console.log("Did not update");
         } else { 
             console.log(req.body._id);
             console.log("Successfully updated enduser");
         }
         res.send(enduser);
     });
 };


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(username, password,done){
  EndUser.findOne({ username : username},function(err,user){
    return err 
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect username.' });
  });
})); 









