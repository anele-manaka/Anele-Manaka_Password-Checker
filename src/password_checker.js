function passwordIsValid(password){
    if (/w|\W/.test(password) == false){
        throw new Error("password should exist")
    }
    if (/.{9,}/.test(password) == false){
        throw new Error("password should be longer than 8 characters")
    }
    if (/[a-z]/.test(password) == false){
        throw new Error("password should have at least one lowercase letter")
    }
    if (/[A-Z]/.test(password) == false){
        throw new Error("password should have at least one uppercase letter")
    } 
    if (/[0-9]/.test(password) == false){
        throw new Error("password should have at least one digit")
    }
    if (/\W|_/.test(password) == false){
        throw new Error("password should have at least one special character")
    }
}

function passwordIsOkay(password){
    if (/.{9,}/.test(password)){
        return true
    }
    else {
        return false
    }
}

module.exports = (passwordIsValid, passwordIsOkay)

