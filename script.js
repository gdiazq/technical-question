const numbers='0123456789'
const lower_case='abcdefghijklmnopqrstuvwxyz'
const super_case='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const special_characters='!@#$%^&*()-+'

const password = "a#addawdwadawdwad77"

function minimunNumber(password) {
    let has_numbers = false
    let has_lower = false
    let has_super = false
    let has_special = false
    let total_missing_criteria = 0

    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            has_numbers = true
        } 
        if (lower_case.includes(password[i])) {
            has_lower = true
        }
        if (super_case.includes(password[i])) {
            has_super = true
        }
        if (special_characters.includes(password[i])) {
            has_special = true
        }
    }

    if (!has_numbers) {
        total_missing_criteria++
    }
    if (!has_lower) {
        total_missing_criteria++
    }
    if (!has_super) {
        total_missing_criteria++
    }
    if (!has_special) {
        total_missing_criteria++
    }
    const lengthDeficit = Math.max(0, 6 - password.length);
    
    const charactersToAdd = Math.max(total_missing_criteria, lengthDeficit);

    return charactersToAdd;
}

minimunNumber(password)