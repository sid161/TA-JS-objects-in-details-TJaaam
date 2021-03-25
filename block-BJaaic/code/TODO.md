# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethods = {
    eat: function(){
        console.log(`I live in ${location} and I can eat);
    }

    changeLocation: function(location){
        let newLocation = location; 
        return newLocation;
    }

    summary: function(){
        return `I live in ${aninfo.location} and I have ${aninfo.numberOfLegs}`
    }
}

function animalinfo (location,noOfLegs){
    let aninfo = object.Create(animalMethods);
    aninfo.location = location;
    aninfo.noOfLegs = noOfLegs;
}

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark` 

let dogMethods = {
    bark: function(){
        alert(`I am ${name} and I can bark)
    }

    changeName: function(name){
        

    }
}

function DogAnimal(name,color){
    let doginfo = object.Create()
    doginfo.name = name;
    doginfo.color = color;
}

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
