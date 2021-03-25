# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
- Class Pattern

#### Animal

Properties:

- `location`
- `numberOfLegs`


Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

class animal{
    constructor(location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }

    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }

    changeLocation(newlocation){
        this.location = newlocation;
        return this.location;
    }
    summary(){
        return `I live in ${this.location} and i have ${this.numberOfLegs}`;
    }
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

class dog extends animal{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs)
        this.name = name;
        this.color = color;
    }

    bark(){
        alert(`I am ${this.name} and I can bark`)'
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am ${this.color} color. I can also bark
    }
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

class cat extends animal{
    constructor(location,numberOfLegs,name,colorOfEyes){
        super(location,numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }

    meow(){
        alert(`I am ${this.name} and I can bark`)'
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am ${this.color} color. I can also bark
    }
}