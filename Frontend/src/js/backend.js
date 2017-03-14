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
function(backendPost(url, data,res_data){
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
exports.create_department = fucntion(data,res_data){
    backendPost('/db/create_department/', data,res_data);
};

