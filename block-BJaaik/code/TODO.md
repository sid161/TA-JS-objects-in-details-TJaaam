## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.


![Inheritance](../assets/inheritance.png)

Class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){

    }
    sleep(){

    }
    walk(){

    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){

    }
}

class techer extends Person{
    constructor(name,age,gender,instititename){
        super(name,age,gender)
        this.institutename = institutename;


    }
    teach(){

    }

}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){

    }
}

class cricketer extends Player{
    constructor(sportsName,teamName){
        super(sportsName)
        this.teamName = teamName;
    }
    playCricket(){
        
    }
}
