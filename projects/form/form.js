CustomValidation.prototype.getInvaliditiesForHTML = function() {
    return this.invalidities.join('. <br>');
  }

  submit.addEventListener('click', function(e) {
      for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.checkValidity() == false) {
            let inputCustomValidation = new CustomValidation();
            inputCustomValidation.checkValidity(input);
            let customValidityMessage = inputCustomValidation.getInvalidities();
            input.setCustomValidity(customValidityMessage);

            let customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
            input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
            stopSubmit = true;
        }
      }
      if (stopSubmit) {
        e.preventDefault();
      }
  });