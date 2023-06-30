document
  .getElementById("studentForm")
  .addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var firstName = document.getElementById("firstName").value;
    // console.log(firstName);
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var parentsName = document.getElementById("parentsName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;

    // Create a new row in the table
    var table = document
      .getElementById("studentTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    // Insert cells in the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    // Set cell values
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = dob;
    cell4.innerHTML = parentsName;
    cell5.innerHTML = address;
    cell6.innerHTML = city;
    cell7.innerHTML = phone;

    // Clear form fields
    document.getElementById("studentForm").reset();
  });