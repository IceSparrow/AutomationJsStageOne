const animal = {
    move: function () {
        console.log ('Moves like Jagger')
    },
};

const cat = {
    name: "Pupunya",
};

Object.setPrototypeOf(cat, animal)

cat.move()
