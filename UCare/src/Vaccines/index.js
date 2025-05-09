// Function to load prescriptions from the server and populate the table
async function loadVaccines() {
  try {
    // Fetch prescription data from the backend API
    const response = await fetch('http://localhost:3000/api/vaccines');
    const data = await response.json();

    // Get the table body element where data will be inserted
    const tbody = document.querySelector('#vaccinesTable tbody');
    
    // Clear any existing rows in the table
    tbody.innerHTML = '';

    // Loop through the prescriptions and create table rows
    data.forEach(p => {
        const row = `<tr>
            <td>${p.vaccine}</td>
            <td>${p.date}</td>
            <td>${p.dose}</td>
            <td>${p.doctor}</td>
            <td>${p.notes}</td>
        </tr>`;
    tbody.innerHTML += row;
});

    // Optional: log the fetched data to the console
    //console.log(data);

    // Initialize Tablesort on the table after data is inserted
    new Tablesort(document.getElementById('vaccinesTable'));

  } catch (error) {
    // Log error if data loading fails
    console.error('Error loading vaccines:', error);
  }
}
