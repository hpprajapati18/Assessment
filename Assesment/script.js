
const form = document.getElementById('complaintForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const vehicle = document.getElementById('vehicle').value.trim();
    const complaint = document.getElementById('complaint').value.trim();


    const errors = {
      name: document.getElementById('nameError'),
      phone: document.getElementById('phoneError'),
      email: document.getElementById('emailError'),
      vehicle: document.getElementById('vehicleError'),
      complaint: document.getElementById('complaintError')
    };

  
    Object.values(errors).forEach(err => err.textContent = "");

    let isValid = true;

    if (!name) { 
      errors.name.textContent = "Name is required";
       isValid = false;
      }
    if (!/^\d{10}$/.test(phone)) { 
      errors.phone.textContent = "Enter valid 10-digit phone"; 
      isValid = false;
     }
    if (!/^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
       errors.email.textContent = "Invalid email format"; 
       isValid = false;
       }
    if (!vehicle) { 
      errors.vehicle.textContent = "Please select a vehicle"; 
      isValid = false; 
    }
    if (!complaint) { 
      errors.complaint.textContent = "Complaint cannot be empty"; 
      isValid = false; 
    }
    if (!isValid) return;

  
    const submission = { name, phone, email, vehicle, complaint };

    
    const submissions = JSON.parse(localStorage.getItem('complaints')) || [];

    submissions.push(submission);
    localStorage.setItem('complaints', JSON.stringify(submissions));

    document.getElementById('successMsg').textContent = "Complaint submitted successfully!";
    form.reset();
  });
}


const tableContainer = document.getElementById('tableContainer');
if (tableContainer) {
  const submissions = JSON.parse(localStorage.getItem('complaints')) || [];

  if (submissions.length === 0) {
    tableContainer.innerHTML = `<p class="text-center text-muted">No data available</p>`;
  } else {
    let tableHTML = `
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Vehicle</th>
            <th>Complaint</th>
          </tr>
        </thead>
        <tbody>
    `;

    submissions.forEach(sub => {
      tableHTML += `
        <tr>
          <td>${sub.name}</td>
          <td>${sub.phone}</td>
          <td>${sub.email}</td>
          <td>${sub.vehicle}</td>
          <td>${sub.complaint}</td>
        </tr>
      `;
    });

    tableHTML += `</tbody></table>`;
    tableContainer.innerHTML = tableHTML;
  }
}
