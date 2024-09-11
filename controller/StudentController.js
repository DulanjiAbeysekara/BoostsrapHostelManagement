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

   var existingIndex = studentList.findIndex(st => st.id === id);
   if (existingIndex !== -1) {
      studentList[existingIndex] = student; // Update existing student
   } else {
      studentList.push(student); // Add new student
   }

   getAll();
   clearForm();
});

function getAll() {
   $('.studentTable').empty();

   for (var student of studentList) {
      var row = `<tr>
            <td>${student.id}</td>
            <td>${student.title} ${student.firstName} ${student.lastName}</td>
            <td>${student.address}</td>
            <td>${student.phoneNum}</td>
            <td>${student.email}</td>
            <td>${student.gender}</td>
            <td><button id="btnDelete" class="btn btn-success fw-semibold mt-2 mt-md-0 ms-2">Delete</button></td>
        </tr>`;
      $('.studentTable').append(row);
   }

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
   // Click to edit a student
   $('.studentTable tr').click(function () {
      let id = $(this).children('td:nth-child(1)').text();
      let fullName = $(this).children('td:nth-child(2)').text().split(' ');
      let address = $(this).children('td:nth-child(3)').text();
      let phoneNum = $(this).children('td:nth-child(4)').text();
      let email = $(this).children('td:nth-child(5)').text();
      let gender = $(this).children('td:nth-child(6)').text();

      $('#txtStudentId').val(id);
      $('#txtGender').val(gender);
      $('#txtStudentName').val(fullName[0]);
      $('#txtStudentFirstName').val(fullName[1]);
      $('#txtStudentLastName').val(fullName[2] || '');
      $('#txtAddress').val(address);
      $('#txtContactNum').val(phoneNum);
      $('#txtEmail').val(email);
   });

   // Click to delete a student
   $('#btnDelete').click(function (e) {
      e.stopPropagation(); // Prevent row click event when clicking delete

      let id = $(this).closest('tr').children('td:nth-child(1)').text();
      studentList = studentList.filter(student => student.id !== id);

      getAll();
   });
}

