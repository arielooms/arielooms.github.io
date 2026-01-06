function closeAndReturn(element) {
    var $currentModal = $(element).closest('.modal');
    var currentModalId = $currentModal.attr('id');
    var parentModalId = currentModalId.replace(/([A-Z]+)$/, '');

    // Hide the current nested modal
    $currentModal.modal('hide');

    // When hidden, show parent modal and fix scroll behavior
    $currentModal.on('hidden.bs.modal', function () {
        // Show parent modal
        $('#' + parentModalId).modal('show');

        // Ensure body has modal-open class to prevent main page scroll
        $('body').addClass('modal-open');

        // Reset scroll inside modal content area to top
        $('#' + parentModalId).find('.modal-content').scrollTop(0);

        // Remove this event handler to avoid duplicates
        $(this).off('hidden.bs.modal');
    });
}




function updateCounter(id) {
    const counterElement = document.getElementById(id);
    if (!counterElement) return; // safety check

    const startDate = new Date(counterElement.dataset.start);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    // Adjust if current day is before start day
    if (now.getDate() < startDate.getDate()) months--;

    // Adjust if months negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display either just months or years+months
    if (years < 1) {
        counterElement.textContent = `${months} month${months !== 1 ? 's' : ''}`;
    } else {
        counterElement.textContent = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
    }
}

// Add multiple functions to run on window load without overwriting each other
window.addEventListener("load", function() {
    updateCounter("time-counter-j1");
});

window.addEventListener("load", function() {
    updateCounter("time-counter-j2");
});

window.addEventListener("load", function() {
    updateCounter("time-counter-j3");
});

window.addEventListener("load", function() {
    updateCounter("time-counter-j4");
});
