document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission for demo purposes

  const cardNumber = document.getElementById('card-number').value;
  const cardHolder = document.getElementById('card-holder').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (validateCardNumber(cardNumber) && validateExpiryDate(expiryDate) && validateCVV(cvv)) {
    alert('Payment successful!');
  } else {
    alert('Please enter valid payment information.');
  }
});

function validateCardNumber(cardNumber) {
  const regex = /^\d{16}$/;
  return regex.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  return regex.test(expiryDate);
}

function validateCVV(cvv) {
  const regex = /^\d{3}$/;
  return regex.test(cvv);
}
