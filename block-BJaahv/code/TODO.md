# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

l function createUser(name,id,noOfProjects){
   let user = {};
   user.name = name;
   user.id = id;
   user.noOfProjects = noOfProjects;

   user.getProjects = function(){
     return noOfProjects;
   }

   user.changeName = function(newName){
     return name;
   }

   user.incrementProject = function(n){
     returns noOfProject + n;
   }

   user.decrementProject = function(n){
     return noOfProject - n;
   }
}

let userMethods = {
   user.getProjects = function(){
     return noOfProjects;
   }

   user.changeName = function(newName){
     return name;
   }

   user.incrementProject = function(n){
     returns noOfProject + n;
   }

   user.decrementProject = function(n){
     return noOfProject - n;
   }
}

function createUser(name,Id,noOfProjects){
  let user = object.create(userMethods);
  user.name = name;
  user.Id = Id;
  user.noOfProjects = noOfProjects;
  return user;
}

class user{
  constructor(name,Id,noOfProjects){
    this.name = name;
    this.Id = Id;
    this.noOfProjects = noOfProjects;
  }
   user.getProjects = function(){
     return noOfProjects;
   }

   user.changeName = function(newName){
     return name;
   }

   user.incrementProject = function(n){
     returns noOfProject + n;
   }

   user.decrementProject = function(n){
     return noOfProject - n;
   }


}