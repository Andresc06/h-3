/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;
let i = 0;
let j = 0;


result = Object.assign({}, foo);
nameProp = result.name;
sklsProp = result.skills;

result.name = nameProp[0].toUpperCase() + nameProp.slice(1);
result.roles[0] = result.roles[0].toUpperCase();
result.roles.push(roleSuperUser);
result.roles.push(roleUser);

sklsProp.splice(0,0, skills[0], skills[1]);
sklsProp.splice(5,0, skills[2]);
sklsProp.push(skills[3]);

key = sklsProp[3].toUpperCase();

for(; i < sklsProp.length; i++) {
    skl = sklsProp[i];

    if(skl == 'html' || skl == "css") sklsProp[i] = skl.toUpperCase();

    else sklsProp[i] = skl[0].toUpperCase() + skl.slice(1);
}

result.levels = levels;




for (j; j < 3; j++) {
    prop = Object.values(result.levels)[j];
    prop.LEVEL = `L${j+1}`;
}

delete result['alias'];

result

//export result
module.exports = result; 