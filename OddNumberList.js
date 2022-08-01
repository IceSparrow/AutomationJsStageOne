let isOdd = function(num) {
        
    if (num == 0) {
        console.log(num + ' Chislo is super even!')
    } else if (num % 2 == 0) {
        console.log(num + ' Chislo is even!')
    } else 
        console.log(num + ' Chislo is odd!')
}
let isOddListed = function(num){ 
for (let i = 0; i < num; i++) {
    isOdd(i)
}
}


isOddListed(100);