import { User } from "../modules/users.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
console.log(user);
user.nume = 'Dan';
user.varsta = 15;
console.log(user);