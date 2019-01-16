var form = document.getElementById('addUserForm');

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  sendData();
});

function sendData() {
  let xhttp = new XMLHttpRequest();
  let url = "/users";
  xhttp.open('POST', url, true);
  let fd = new FormData(form);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ){
      if(this.status==200)
        alert(`${this.responseText}`);
      else
        alert(this.responseText);
      location.reload(true);
    }
  };
  xhttp.send(fd);
};