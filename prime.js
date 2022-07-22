function chislo(num) {
    if (num == 1) {
        console.log('Chislo is not prime!')
    } else if (num == 2 || num == 3 || num == 5) {
        console.log('Chislo is prime!')
    } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
        console.log ('Chsilo is not prime!')
    } else console.log('Chislo is prime!')
        }
    
chislo(1)
chislo(3)
chislo(4)
chislo(5)
chislo(23)

