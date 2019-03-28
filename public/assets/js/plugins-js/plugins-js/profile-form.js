var $body = $('body');
var $progressBar = $('progress');
var $animContainer = $('.animation-container');
var value = 0;
var transitionEnd = 'webkitTransitionEnd transitionend';

/**
 * Resets the form back to the default state.
 * ==========================================
 */
function formReset() {
    value = 0;
    $progressBar.val(value);
    $('form input').not('button').val('').removeClass('hasInput');
    $('.js-form-step').removeClass('left leaving');
    $('.js-form-step').not('.js-form-step[data-step="1"]').addClass('hidden waiting');
    $('.js-form-step[data-step="1"]').removeClass('hidden');
    $('.form-progress-indicator').not('.one').removeClass('active');

    $animContainer.css({
        'paddingBottom': $('.js-form-step[data-step="1"]').height() + 'px'
    });

    console.warn('Form reset.');
    return false;
}

/**
 * Sets up the click handlers on the form. Next/reset.
 * ===================================================
 */
function setupClickHandlers() {

    // Show next form on continue click
    $('button[type="submit"]').on('click', function (event) {
        event.preventDefault();
        var $currentForm = $(this).parents('.js-form-step');
        showNextForm($currentForm);
    });

    // Reset form on reset button click
    $('.js-reset').on('click', function () {
        formReset();
    });

    return false;
}

/**
 * Shows the next form.
 * @param - Node - The current form.
 * ======================================
 */
function showNextForm($currentForm) {
    var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
    var $nextForm = $('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');

    console.log('Current step is ' + currentFormStep);
    console.log('The next form is # ' + $nextForm.attr('data-step'));

    $body.addClass('freeze');

    // Ensure top of form is in view
    $('html, body').animate({
        scrollTop: $progressBar.offset().top
    }, 'fast');

    // Hide current form fields
    $currentForm.addClass('leaving');
    setTimeout(function () {
        $currentForm.addClass('hidden');
    }, 500);

    // Animate container to height of form
    $animContainer.css({
        'paddingBottom': $nextForm.height() + 'px'
    });

    // Show next form fields
    $nextForm.removeClass('hidden')
        .addClass('coming')
        .one(transitionEnd, function () {
            $nextForm.removeClass('coming waiting');
        });

    // Increment value (based on 4 steps 0 - 100)
    value += 33;

    // Reset if we've reached the end
    if (value >= 100) {
        formReset();
    } else {
        $('.form-progress')
            .find('.form-progress-indicator.active')
            .next('.form-progress-indicator')
            .addClass('active');

        // Set progress bar to the next value
        $progressBar.val(value);
    }

    // Update hidden progress descriptor (for a11y)
    $('.js-form-progress-completion').html($progressBar.val() + '% complete');

    $body.removeClass('freeze');

    return false;
}

/**
 * Sets up and handles the float labels on the inputs.
 =====================================================
 */
function setupFloatLabels() {
    // Check the inputs to see if we should keep the label floating or not
    $('form input').not('button').on('blur', function () {

        // Different validation for different inputs
        switch (this.tagName) {
            case 'SELECT':
                if (this.value > 0) {
                    this.className = 'hasInput';
                } else {
                    this.className = '';
                }
                break;

            case 'INPUT':
                if (this.value !== '') {
                    this.className = 'hasInput';
                } else {
                    this.className = '';
                }
                break;

            default:
                break;
        }
    });

    return false;
}

/**
 * Gets the party started.
 * =======================
 */
function init() {
    formReset();
    setupFloatLabels();
    setupClickHandlers();
}

init();