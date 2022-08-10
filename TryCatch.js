try {
   console.log (a)
   let a = 3
    
} catch {
   console.log('let must be declared')
}

try {
    if (1/0) {
        throw new Error();
    }
} catch {
    console.log('cannot be divided by zero')
}

