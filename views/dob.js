function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageMessage = document.getElementById('age-message');
  
    if (!dobInput.value) {
        alert('Please enter a valid date of birth.');
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();
  
    if (dob > today) {
        alert('Please enter a valid date of birth.');
        dobInput.value = '';
        ageMessage.textContent = ''; 
        return;
    }

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
        if (ageDays < 0) {
            const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += lastMonthDays;
            ageMonths--;
        }
    }
  
    ageMessage.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
