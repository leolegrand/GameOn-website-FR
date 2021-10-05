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
const tournamentQuantity = document.getElementById('quantity').value

// Modèle de l'alerte pour les erreurs d'input
let alertForm = document.createElement('p')
alertForm.style.fontSize = '12px'
alertForm.style.color = 'red'

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
  if (namesFormat.test(names)) {
    return true
  } else {
    return false
  }
}

// Vérifie qu'une adresse email est valide.
function validateEmail(inputEmail) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (mailFormat.test(inputEmail)) {
    return true
  } else {
    return false
  }
}

// Vérifie que le champs n'est pas vide.
function isNotEmpty(inputQuantity) {
  if (inputQuantity.length == 0) {
    console.log('Champs vide')
    return false
  } else {
    return true
  }
}

// Vérifie qu'une localisation est bien cochée. POURQUOI ELSE FAIS DES CAPRICES?
function isChecked(values) {
  for (let value of values) {
    if (value.checked) {
      return true
    }
  }
}

// Vérifie que les inputs du formulaires sont tous valides et
// empêche l'action par default du bouton submit.
function validateInputs(e) {
  const first = document.getElementById('first').value
  const last = document.getElementById('last').value
  const mail = document.getElementById('email').value
  const birthdate = document.getElementById('birthdate').value
  const quantity = document.getElementById('quantity').value
  const locations = document.getElementsByName('location')
  const agreementCheckbox = document.getElementById('checkbox1')
  const formFirst = document.getElementById('form-first')
  const formLast = document.getElementById('form-last')
  const formMail = document.getElementById('form-mail')
  const formBirthdate = document.getElementById('form-birthdate')
  const formQuantity = document.getElementById('form-quantity')
  const formLocations = document.getElementById('form-location')
  const formAgreement = document.getElementById('form-agreement')

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
    alertForm.textContent = ''
    console.log('Formulaire valide.')
    return true
  } else if (!validateNames(first)) {
    e.preventDefault()
    formFirst.appendChild(alertForm)
    alertForm.textContent =
      'Veuillez entrer deux caractères ou plus pour le champ du prénom.'
  } else if (!validateNames(last)) {
    e.preventDefault()
    formLast.appendChild(alertForm)
    alertForm.textContent =
      'Veuillez entrer deux caractères ou plus pour le champ du nom.'
  } else if (!validateEmail(mail)) {
    e.preventDefault()
    formMail.appendChild(alertForm)
    alertForm.textContent = "L'adresse e-mail n'est pas valide."
  } else if (!isNotEmpty(birthdate)) {
    e.preventDefault()
    formBirthdate.appendChild(alertForm)
    alertForm.textContent = 'Ce champs ne peut pas être vide.'
  } else if (!isNotEmpty(quantity)) {
    e.preventDefault()
    formQuantity.appendChild(alertForm)
    alertForm.textContent = 'Ce champs ne peut pas être vide.'
  } else if (!isChecked(locations)) {
    e.preventDefault()
    formLocations.appendChild(alertForm)
    alertForm.textContent = 'Veuillez choisir une option.'
  } else if (!agreementCheckbox.checked) {
    e.preventDefault()
    formAgreement.appendChild(alertForm)
    alertForm.textContent =
      'Vous devez vérifier que vous acceptez les termes et conditions.'
  } else {
    e.preventDefault()
    console.log('Formulaire invalide.')
    return false
  }
}

// Au clique du bouton submit, validateInputs est appliquée.
const submitBtn = document.getElementById('btn-submit')

submitBtn.addEventListener('click', validateInputs)
