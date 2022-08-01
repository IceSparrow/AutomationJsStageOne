let isPrime = function(num) {
        
        if (num <= 1) {
            console.log(num + ' Chislo is not in prime number range!')
        } else if (num == 2 || num == 3 || num == 5) {
            console.log(num + ' Chislo is prime!')
        } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
            console.log (num + ' Chsilo is not prime!')
        } else console.log(num +' Chislo is prime!')
}
let isPrimeListed = function(num){ 
    for (let i = 0; i < num; i++) {
        isPrime(i)
    }
}


isPrimeListed(100);