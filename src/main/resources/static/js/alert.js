
function onClickDelete(){
    event.preventDefault();
    let del = $('#del').attr('href');
    console.log(del);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed Out successfully'
          })
          document.location.href = del;
          //del.remove;
        }
    });
}
function logout(){
    event.preventDefault();
    let out = $('#out').attr('href');
    console.log(out);
    Swal.fire({
        position : 'top-end',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Log out'
      }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed Out successfully'
          })
          document.location.href = out;
          //del.remove;
        }
    });
}

function cekId(){
    let del = $('#upd').attr('href');
    console.log(upd);
}

function onClickUpdate(){
    //event.returnValue = false;
    //console.log(event);
    //const href = document.querySelector('#update').getAttribute('action');
    //console.log(href);
    event.preventDefault();
    let form = $('form');
    console.log(form);
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Yes, Submit!'
      }).then((result) => {
        if (result.isConfirmed) {
          //event.returnValue = true;
          Swal.fire(
            'Updated!',
            'Your file has been submitted.',
            {timer: 2000}
          );
          form.submit();
          
        }
    });
}

function onClickChange(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
}

function login(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed In successfully'
    })
}

