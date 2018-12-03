var myForm = document.getElementById('form-check');
myForm.addEventListener('submit', function(e)
{
    var id = document.getElementById("studentId").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fcode-api.herokuapp.com/new/" + id, true);
    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            if (xhr.responseText != 'null') {
                document.getElementById("existed").style.display = "";
                document.getElementById("notFound").style.display = "none";
                var student = JSON.parse(xhr.responseText);
                document.getElementById("id").innerHTML = "<b>Student ID: </b>" + student.studentID;
                document.getElementById("name").innerHTML = "<b>Fullname: </b>" + student.fullname;
                // document.getElementById("comment").innerHTML = "<b>Comment: </b>" + student.comment;
                document.getElementById("grade").innerHTML = "<b>Team: </b>" + student.grade;
                if (student.passed == true) {
                    document.getElementById("noti").innerHTML = "Chúc mừng bạn đã vượt qua thử thách và trở thành thành viên chính thức của CLB F-CODE";
                    document.getElementById("fb").style.display = "";
                    document.getElementById("pass").className = "alert alert-success";
                
                } else{
                    document.getElementById("noti").innerHTML = "Bạn đã không vượt qua thử thách của CLB đưa ra, cảm ơn bạn thời gian qua đã dành thời gian cho CLB.";
                    document.getElementById("fb").style.display = "none";
                    document.getElementById("pass").className = "alert alert-danger";

                }

            } else{
                document.getElementById("existed").style.display = "none";
                document.getElementById("notFound").style.display = "";

            }
        }
     };

    xhr.send();
    e.preventDefault();
}); 