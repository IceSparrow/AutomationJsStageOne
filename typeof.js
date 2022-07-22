function shoto(something) {
    if (typeof (something) == 'string') {
        console.log('This is STRING')
    } else if (typeof (something) == 'number') {
        console.log('This is NUM')
    } else if (typeof (something) == 'boolean') {
        console.log('This is BOO')
    }

}
shoto (true)