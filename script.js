const numbers='0123456789'
const lower_case='abcdefghijklmnopqrstuvwxyz'
const super_case='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const special_characters='!@#$%^&*()-+'

const password = "Kefaf#2"

function minimunNumber(password) {
    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            console.log("El password contiene un número")
        }
    }
}

minimunNumber(password)