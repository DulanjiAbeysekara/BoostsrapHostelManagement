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
   clearForm();
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

   bindClickEvents();
}

function clearForm() {
   $('#txtStudentId').val('');
   $('#txtGender').val('MALE');
   $('#txtStudentName').val('Mr');
   $('#txtStudentFirstName').val('');
   $('#txtStudentLastName').val('');
   $('#txtAddress').val('');
   $('#txtContactNum').val('');
   $('#txtDob').val('');
   $('#txtEmail').val('');
}

function bindClickEvents() {
   $('.studentTable tr').click(function () {
      let id = $(this).children('td:nth-child(1)').text();
      let fullName = $(this).children('td:nth-child(2)').text();
      let address = $(this).children('td:nth-child(3)').text();
      let phoneNum = $(this).children('td:nth-child(4)').text();
      let email = $(this).children('td:nth-child(5)').text();
      let gender = $(this).children('td:nth-child(6)').text();

      $('#txtStudentId').val(id);
      $('#txtGender').val(gender);
      $('#txtStudentName').val(fullName.split(' ')[0]);
      $('#txtStudentFirstName').val(fullName.split(' ')[1]);
      $('#txtStudentLastName').val(fullName.split(' ')[2]);
      $('#txtAddress').val(address);
      $('#txtContactNum').val(phoneNum);
      $('#txtEmail').val(email);
   });
}

