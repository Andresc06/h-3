/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

let name = result.name;
let role = result['role'];

result.name = name[0].toUpperCase() + name.slice(1);
result['role'] = role.toUpperCase();
 
//export result
module.exports = result; 
