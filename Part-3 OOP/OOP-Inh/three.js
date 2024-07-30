class Parent{
    m1(){ 
        console.log("Parent Class -m1 Method")
    }
    m2(){
        console.log("Parent Class -m2 Method")
    }
}
class Child extends Parent {
    m3(){
        console.log("Child Class -m3 Method")
    }
}
let c1=new Child();
console.log(c1)
c1.m1()
c1.m2();
c1.m3()