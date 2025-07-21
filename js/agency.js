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
