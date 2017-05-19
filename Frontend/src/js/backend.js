 var API_URL = "hhpt://localhost:5050";

 function backendGet(url, res_data) {
     $.ajax({
         url: API_URL + url, 
         type: 'GET',
         success: function(data){
             res_data(data);
         },
         fail:function() {
             res_data({});
         }
     })
 }
function backendPost(url, data,res_data){
    $.ajax({
        url:API_URL + url, 
        type:'POST',
        contentType: 'applcation/json',
        data:JSON.stringify(data),
        success: function(data){
            res_data(data);
        },
        fail: function() {
            res_data({});
        }
    })
}

exports.show_all_departments = function (res_data){
    backendGet('/db/show_all_departments/', res_data);
};
exports.create_department = function(data,res_data){
    backendPost('/db/create_department/', data,res_data);
};
exports.get_department_by_id =  function (res_data) {
    backendGet('/db/get_department_by_id/',res_data);
};
exports.get_department_by_name = function( res_data) {
    backendGet(' /db/get_department_by_name/', res_data);
};
exports.get_department_by_description = function(res_data) {
    backendGet( '/db/get_department_by_description/', res_data);
};
exports.update_department = function(data,res_data) {
    backendPost( '/db/update_department/',data,res_data);
};

exports.delete_all_departmnets = function (res_data) {
    backendGet ('/db/delete_all_departments/', res_data);
};
exports.delete_department = function (res_data) {
    backendGet( '/db/delete_department', res_data);
};

exports.get_enduser_by_id = function(res_data){
    backendGet('/db/get_enduser_by_id/',res_data);
};

exports.create_enduser = function(data,res_data){
     backendPost('/db/create_department/', data,res_data);
    
}

