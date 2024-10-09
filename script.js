document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const presentCount = document.getElementById('present-count');
    const sickCount = document.getElementById('sick-count');
    const paidCount = document.getElementById('paid-count');
    const weekoffCount = document.getElementById('weekoff-count');

    // Initialize counts
    let presentDays = 0;
    let sickDays = 0;
    let paidDays = 0;
    let weekoffDays = 0;

    // Create a 30-day calendar (example)
    for (let i = 1; i <= 30; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.addEventListener('click', function () {
            // Cycle through attendance statuses
            if (dayDiv.classList.contains('present')) {
                dayDiv.classList.remove('present');
                presentDays--;
            } else if (dayDiv.classList.contains('sick')) {
                dayDiv.classList.remove('sick');
                sickDays--;
            } else if (dayDiv.classList.contains('paid')) {
                dayDiv.classList.remove('paid');
                paidDays--;
            } else if (dayDiv.classList.contains('weekoff')) {
                dayDiv.classList.remove('weekoff');
                weekoffDays--;
            } else {
                // Add next status in order: present > sick > paid > weekoff
                if (presentDays + sickDays + paidDays + weekoffDays % 4 === 0) {
                    dayDiv.classList.add('present');
                    presentDays++;
                } else if (presentDays + sickDays + paidDays + weekoffDays % 4 === 1) {
                    dayDiv.classList.add('sick');
                    sickDays++;
                } else if (presentDays + sickDays + paidDays + weekoffDays % 4 === 2) {
                    dayDiv.classList.add('paid');
                    paidDays++;
                } else {
                    dayDiv.classList.add('weekoff');
                    weekoffDays++;
                }
            }
            updateAttendance();
        });
        calendar.appendChild(dayDiv);
    }

    function updateAttendance() {
        presentCount.textContent = presentDays;
        sickCount.textContent = sickDays;
        paidCount.textContent = paidDays;
        weekoffCount.textContent = weekoffDays;
    }
});
