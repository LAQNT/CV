function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

console.log(getAge("1993-07-31"));

function insertAge() {
  const span = document.createElement("SPAN");
  span.innerText = getAge("1993-07-31") + " years old";
  document.querySelector(".age").appendChild(span);
}

insertAge();
