// Part 1: Age Calculate
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Part 2: Check if Prime
function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Main Function
function checkAgePrime() {
    const input = document.getElementById("birthYear").value;
    const birthYear = parseInt(input);
    const currentYear = new Date().getFullYear();

    
    if (!input || isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        alert("Please enter a valid birth year.");
        return;
    }

    const age = calculateAge(birthYear);
    const primeResult = isPrime(age);

    if (primeResult) {
        alert("Your age is: " + age + "\n" + age + " is a Prime number.");
    } else {
        alert("Your age is: " + age + "\n" + age + " is NOT a Prime number.");
    }
}