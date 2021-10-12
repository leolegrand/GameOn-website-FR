function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const closeBtn = document.querySelectorAll('.close')
const submitBtn = document.getElementById('btn-submit')
let alertForm = document.createElement('p')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// Pour chaque itération de closeBtn, j'applique closeModal si un clique est effectué
closeBtn.forEach((xBtn) => xBtn.addEventListener('click', closeModal))

// Fais disparaitre modalbg
function closeModal() {
  modalbg.style.display = 'none'
}

// Vérifie que le prénom et le nom ne commencent ni ne finissent pas un espace
// et contiennent au moins deux caractères
function validateNames(names) {
  let namesFormat = /^\S[a-zA-Z-' ]{0,}\S$/
  return namesFormat.test(names) ? true : false
}

// Vérifie qu'une adresse email est valide.
function validateEmail(inputEmail) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return mailFormat.test(inputEmail) ? true : false
}

// Vérifie que le champs n'est pas vide.
function isNotEmpty(inputQuantity) {
  return inputQuantity.length === 0 ? false : true
}

// Vérifie qu'une localisation est bien cochée.
function isChecked(radiosBtn) {
  return radiosBtn === null ? false : true
}

// Vérifie que les inputs du formulaires sont tous valides,
// sinon, affiche un message d'erreur &
// empêche l'action par default du bouton submit.
function validateInputs(e) {
  const first = document.getElementById('first').value
  const last = document.getElementById('last').value
  const mail = document.getElementById('email').value
  const birthdate = document.getElementById('birthdate').value
  const quantity = document.getElementById('quantity').value
  const agreementCheckbox = document.getElementById('checkbox1')
  const locations = document.querySelector('input[name="location"]:checked')
  if (
    validateNames(first) &&
    validateNames(last) &&
    validateEmail(mail) &&
    isNotEmpty(birthdate) &&
    isNotEmpty(quantity) &&
    isChecked(locations) &&
    agreementCheckbox.checked
  ) {
    alert('Merci! Votre réservation a été reçue')
    return true
  } else if (!validateNames(first)) {
    e.preventDefault()
    formData[0].appendChild(alertForm)
    alertForm.textContent =
      'Veuillez entrer deux caractères ou plus pour le champ du prénom.'
  } else if (!validateNames(last)) {
    e.preventDefault()
    formData[1].appendChild(alertForm)
    alertForm.textContent =
      'Veuillez entrer deux caractères ou plus pour le champ du nom.'
  } else if (!validateEmail(mail)) {
    e.preventDefault()
    formData[2].appendChild(alertForm)
    alertForm.textContent = "L'adresse e-mail n'est pas valide."
  } else if (!isNotEmpty(birthdate)) {
    e.preventDefault()
    formData[3].appendChild(alertForm)
    alertForm.textContent = 'Ce champs ne peut pas être vide.'
  } else if (!isNotEmpty(quantity)) {
    e.preventDefault()
    formData[4].appendChild(alertForm)
    alertForm.textContent = 'Ce champs ne peut pas être vide.'
  } else if (!isChecked(locations)) {
    e.preventDefault()
    formData[5].appendChild(alertForm)
    alertForm.textContent = 'Veuillez choisir une option.'
  } else if (!agreementCheckbox.checked) {
    e.preventDefault()
    formData[6].appendChild(alertForm)
    alertForm.textContent =
      'Vous devez vérifier que vous acceptez les termes et conditions.'
  } else {
    e.preventDefault()
    console.log('Formulaire invalide.')
    return false
  }
}

// Au clique du bouton submit, validateInputs est appliquée.
submitBtn.addEventListener('click', validateInputs)
