function getandsave() {
  let title = document.querySelector("#exampleInputEmail1").value;
  let details = document.querySelector("#exampleInputEmail2").value;

  let itemsJsonArray = [];
  if (localStorage.getItem('itemsJson') == null) {
    itemsJsonArray.push([title, details]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  }
  else {
    itemsJsonArray = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArray);
    itemsJsonArray.push([title, details]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  }
  save();
}
function save() {
  if (localStorage.getItem('itemsJson') == null) {
    itemsJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  }
  else {
    itemsJsonArray = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArray);
  }


  let tableBody = document.querySelector("#tablebody");
  let str = ""

  for (let i = 0; i < itemsJsonArray.length; i++) {
    str += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${itemsJsonArray[i][0]}</td>
    <td>${itemsJsonArray[i][1]}</td>
    <td><button type="button" onclick="deleted(${i})" class="btn btn-primary btn-sm ">Delete</button></td>
  </tr>`
  }
  tableBody.innerHTML = str;
}

function deleted(indx) {
  items = localStorage.getItem("itemsJson");
  items = JSON.parse(items);
  items.splice(indx, 1);
  items = JSON.stringify(items);
  localStorage.clear();
  localStorage.setItem('itemsJson', items);
  save();
}

let btn = document.querySelector(".btn").addEventListener("click", getandsave);
save();
let del = document.querySelector("#del").addEventListener("click", deleted);