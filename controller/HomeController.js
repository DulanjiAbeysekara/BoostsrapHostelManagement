document.getElementById('student').addEventListener('click',function (){
    document.getElementById('stuDetails').style.visibility='visible';
    document.getElementById('roomDetails').style.visibility='hidden';
    // document.getElementById('room').style.visibility='hidden';
    // document.getElementById('reservation').style.visibility='hidden';
});

document.getElementById('student').addEventListener('click',function (){
    document.getElementById('roomDetails').style.visibility='visible';
    document.getElementById('stuDetails').style.visibility='hidden';
    // document.getElementById('student').style.visibility='hidden';
    // document.getElementById('reservation').style.visibility='hidden';
});
//
// $('#reservation').click(function (){
//     document.getElementById('dashboard').style.visibility='hidden';
//     document.getElementById('home').style.visibility='hidden';
//     document.getElementById('room').style.visibility='hidden';
//     document.getElementById('student').style.visibility='hidden';
// });
//
// $('#home').click(function (){
//     document.getElementById('dashboard').style.visibility='hidden';
//     document.getElementById('student').style.visibility='hidden';
//     document.getElementById('room').style.visibility='hidden';
//     document.getElementById('reservation').style.visibility='hidden';
// });
//
// $('#dashboard').click(function (){
//     document.getElementById('student').style.visibility='hidden';
//     document.getElementById('home').style.visibility='hidden';
//     document.getElementById('room').style.visibility='hidden';
//     document.getElementById('reservation').style.visibility='hidden';
// });