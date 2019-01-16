var dialog1 = document.getElementById('dialog1');
var id;
function update(uid){
  id = uid;
  dialog1.showModal();
}
function updateUser() {
  let xhttp = new XMLHttpRequest();
  let url = "/users/"+id;
  xhttp.open('PUT', url, true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ){
      if(this.status==200)
        alert(`${this.responseText}`);
      else
        alert(this.responseText);
      location.reload(true);
    }
  };
  xhttp.send(JSON.stringify({
    name : document.getElementById("name1").value,
    age : document.getElementById("age1").value
  }));
};