function getById(id) {
    console.log(id);
    $.ajax({
        url: `/employee/${id}`,
        type: 'GET',
        success: (res) => {
            console.log(res);
            setForm(res);
        }
    });
}

function setForm(emp) {
    $("#employeeId").val(emp.employeeId);
    $("#employeeName").val(emp.employeeName);
    $("#birthDate").val(emp.birthDate);
    $("#email").val(emp.email);
}