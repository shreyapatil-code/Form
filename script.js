document.getElementById("admissionForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let branch = document.getElementById("course").value;
  let address = document.getElementById("address").value;

  let tableBody = document.querySelector("#studentTable tbody");
  let newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${dob}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${branch}</td>
    <td>${address}</td>
  `;

  tableBody.appendChild(newRow);

  document.getElementById("admissionForm").reset();
  alert("✅ Student added successfully!");
});
