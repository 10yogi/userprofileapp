function deleteUser(id) {
  let xhttp = new XMLHttpRequest();
  let url = "/users/"+id;
  console.log(url);
  xhttp.open('DELETE', url, true);
  xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ){
      if(this.status==200)
        alert(`deleted user : ${this.responseText}`);
      else
        alert(`status : ${this.status} error: ${this.responseText}`);
      location.reload(true);
    }
  };
  xhttp.send();
};