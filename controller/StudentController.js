var studentList = [];

$('#btnSave').click(function () {
   var id = $('#txtStudentId').val();
   var gender = $('#txtGender').val();
   var title = $('#txtStudentName').val();
   var firstName = $('#txtStudentFirstName').val();
   var lastName = $('#txtStudentLastName').val();
   var address = $('#txtAddress').val();
   var phoneNum = $('#txtContactNum').val();
   var dob = $('#txtDob').val();
   var email = $('#txtEmail').val();

   var student = {
      id: id,
      gender: gender,
      title: title,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNum: phoneNum,
      dob: dob,
      email: email
   };

   studentList.push(student);
   getAll();
});

function getAll() {
   $('.studentTable').empty();

   for (var student of studentList)  {
      var row = `<tr>
            <td>${student.id}</td>
            <td>${student.title} ${student.firstName} ${student.lastName}</td>
            <td>${student.address}</td>
            <td>${student.phoneNum}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
        </tr>`;
      $('.studentTable').append(row);
   };
}
