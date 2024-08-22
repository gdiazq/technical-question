const numbers='0123456789'
const lower_case='abcdefghijklmnopqrstuvwxyz'
const super_case='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const special_characters='!@#$%^&*()-+'

const password = "Ke#2"

function minimunNumber(password) {
    if (password.length < 6) {
        console.log('El password es muy corto')
    } else {
        for (let i = 0; i < password.length; i++) {
            if (numbers.includes(password[i])) {
                console.log('El password contine un numero')
            } 
            if (lower_case.includes(password[i])) {
                console.log('El password contine una letra minuscula')
            }
            if (super_case.includes(password[i])) {
                console.log('El password contine una letra mayuscula')
            }
            if (special_characters.includes(password[i])) {
                console.log('El password contine un caracter especial')
            }
        }
    }
}

minimunNumber(password)