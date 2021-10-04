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
    return (names = true)
  } else {
    console.log(
      names + " n'est pas conforme aux attentes du champs nom et prenom."
    )
    return (names = false)
  }
}

// Vérifie qu'une adresse email est valide.
function validateEmail(inputEmail) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (mailFormat.test(inputEmail)) {
    return (inputEmail = true)
  } else {
    console.log(inputEmail + " n'est pas une adresse mail valide.")
    return (inputEmail = false)
  }
}

// Vérifie que le champs n'est pas vide.
function isNotEmpty(inputQuantity) {
  if (inputQuantity.length == 0) {
    console.log('Champs tournoi vide')
    return (inputQuantity = false)
  } else {
    return (inputQuantity = true)
  }
}

// Vérifie qu'une localisation est bien cochée.
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
  e.preventDefault()

  const first = document.getElementById('first').value
  const last = document.getElementById('last').value
  const mail = document.getElementById('email').value
  const quantity = document.getElementById('quantity').value
  const locations = document.getElementsByName('location')
  const agreementCheckbox = document.getElementById('checkbox1')

  if (
    validateNames(first) &&
    validateNames(last) &&
    validateEmail(mail) &&
    isNotEmpty(quantity) &&
    isChecked(locations) &&
    agreementCheckbox.checked
  ) {
    console.log('Formulaire valide.')
  } else {
    console.log('Formulaire invalide.')
  }
}

// Pour chaque itération du bouton submit, validateInputs est appliquée.
const submitBtn = document.getElementById('btn-submit')

submitBtn.addEventListener('click', validateInputs)
