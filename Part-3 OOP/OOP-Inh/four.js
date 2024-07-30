class Parent{
    /* constructor(){
        console.log("Parent class -constructor")
    } */
}
class Child extends Parent{
    constructor(){
        super();//invoking parent class member ie const
        console.log("Child class -constructor")
    }
}
new Child();