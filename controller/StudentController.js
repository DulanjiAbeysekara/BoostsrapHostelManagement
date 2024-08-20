
//    alert('Hi!');
var studentList=[];

$('#btnSave').click(function (){

var id=$('#txtStudentId').val();
var gender=$('#txtGender').val();
var name=$('#txtStudentName').val();
var firstName=$('#txtStudentFirstName').val();
var lastName=$('#txtStudentLastName').val();
var address=$('#txtAddress').val();
var phoneNum=$('#txtContactNum').val();
var dob=$('#txtDob').val();
var email=$('#txtEmail').val();

student={
   id:id,
   gender:gender,
   name:name,
   firstName:firstName,
   lastName:lastName,
   address:address,
   phoneNum:phoneNum,
   dob:dob,
   email:email
   }

   getAll();
});

function  getAll(){
   for(var student in studentList){

      var row=" <tr><td >student.Student Id</td> <td>student.Student Name</td><td>student.Address</td> <td>student.Contact No</td> <thd>student.Email</td> <td>student.Gender</td> </tr>";
      $('#studentTable').append(row);
   }

}