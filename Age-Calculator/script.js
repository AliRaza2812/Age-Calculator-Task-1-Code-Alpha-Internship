function calculateAge() {
    // Get the value from the input field
    const dobInput = document.getElementById('dob').value;
  
    if (!dobInput) {
      alert("Please enter a valid date of birth.");
      return;
    }
  
    // Parse the date input value to a Date object
    const dob = new Date(dobInput);
    
    // Get the current date
    const today = new Date();
  
    // Calculate the difference in years
    let age = today.getFullYear() - dob.getFullYear();
  
  // Adjust the age if the birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - dob.getMonth();
  const dayDifference = today.getDate() - dob.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--; // Subtract 1 from age if the birthday hasn't occurred yet this year
  }

  // Display the result
  document.getElementById('age').textContent = age;
}

