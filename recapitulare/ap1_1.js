class Angajat{
    constructor(name){
        this.name = name;
    }
    sayHello(n){
        console.log(`Salut ${n}`);
    }
    
}
class Manager extends Angajat{
    constructor(fname,lname){
        super(fname);
        this.lname = lname;
    }

}
const ang = new Angajat("Popescu");
ang.sayHello("Ionescu");
const man = new Manager("Dan","Dumitrescu");
man.sayHello("Ionescu");