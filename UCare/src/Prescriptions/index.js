async function loadPrescriptions() {
    const response = await fetch('/api/prescriptions');
    const data = await response.json();
  
    const tbody = document.querySelector('#prescriptionTable tbody');
    tbody.innerHTML = ''; // Clear any old data
  
    data.forEach(p => {
      const row = `<tr>
        <td>${p.medication_name}</td>
        <td>${p.dosage}</td>
        <td>${p.start_date}</td>
        <td>${p.end_date}</td>
        <td>${p.prescribing_doctor}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
  