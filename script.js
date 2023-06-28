const year = new Date().getFullYear()
document.getElementById('year').innerHTML = year

document
  .getElementByClass('signup-image')
  .addEventListener('click', function () {
    window.location.href = 'https://www.kidney.org/transplantation/beadonor'
  })
