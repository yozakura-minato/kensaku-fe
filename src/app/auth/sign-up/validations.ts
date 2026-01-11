export function displayNameValidation(displayName: string): string {
    
    // Required
    if (!displayName) {
        return "\"Display Name\" is required!.";
    }

    // Length 3~30 and only letters, numbers, spaces 
    const isDisplayNameValid: boolean = /^[a-zA-Z0-9 ]{3,30}$/.test(displayName);
    if (!isDisplayNameValid) {
        return "\"Display Name\" must be 3-30 characters long and can only contain letters, numbers, spaces.";
    }

    return "";
}

export function emailValidation(email: string): string {
    
    // Required
    if (!email) {
        return "\"Email\" is required.";
    }

    return "";
}

export function passwordValidation(password: string): string {
    
    // Required
    if (!password) {
        return "\"Password\" is required.";
    }

    // Length 8~50
    const lengthValid: boolean = password.length >= 8 && password.length <= 50;
    if (!lengthValid) {
        return "\"Password\" must be between 8 and 50 characters long.";
    };

    // Contain at least 2 types of digit
    let strengthValid: number = 0;
    if (/[a-z]/.test(password)) strengthValid++;
    if (/[A-Z]/.test(password)) strengthValid++;
    if (/[0-9]/.test(password)) strengthValid++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthValid++;
    if (strengthValid < 2) {
        return "\"Password\" must contain at least 2 of the following: lowercase letter, uppercase letter, number, special character.";
    }

    return "";
}

export function confirmPasswordValidation(confirmPassword: string, password: string): string {
    
    // Required
    if (!confirmPassword) {
        return "\"Confirm password\" is required";
    }

    // Match password
    const isConfirmPasswordValid: boolean = password === confirmPassword;
    if (!isConfirmPasswordValid) {
        return "\"Confirm Password\" does not match \"Password\".";
    }

    return "";
}