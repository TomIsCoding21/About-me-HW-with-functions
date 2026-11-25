const me={
    name:"Phyo Zaw Aung",
    gender:"male",
    city:"Yangon",
    dob:2009,
    isStudent:true,
    email:undefined,
    car:null,
    hobbies:["coding","reading","building"],
    mother:{
        name:"Yu Yu",
        dob:1976
    }
}

function task1(){
    console.log(me);
}

function getPersonInfo(name, dob, gender) {
    console.log(name + " was born in " + dob)
    const age = new Date().getFullYear() - dob;

    console.log(name + " is " + age + " years old.")
    if (age > 10 && !(gender == "male")) {
        console.log(name + " is allowed to Enter.")
    } else {
        console.log(name + " is NOT allowed to Enter.")
    }

}

function task2(){
    getPersonInfo(me.name,me.dob,me.gender);
}

const age = new Date().getFullYear() - me.dob;

function task3(){

    if(age>=18 && me.city==="Yangon"){
        console.log("Welcome")
    }
    else{
        console.log("Sorry")
    }
}

function getAge(dob) {
    return new Date().getFullYear() - dob;
}

function introduce(person){
    console.log(person.name,"is",age,"years old and lives in",person.city )
}

function Ages(){
    console.log(me.name + " is " + getAge(me.dob))
    console.log(me.mother.name + " is " + getAge(me.mother.dob))
}