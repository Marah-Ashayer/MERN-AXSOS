const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//  ------------------------------Create User ---------------------------------//

const createUser = ()=> {
  const newUser = {
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    password : faker.internet.password(),   
    email : faker.internet.exampleEmail(),
    phoneN : faker.phone.number(),
    id : faker.datatype.uuid(),
  };
  return newUser;
}
const newFakeUser=createUser();
console.log(newFakeUser);

app.get("/api/user", (req, res) => {
  res.json({newFakeUser });
});

// -----------------------------------Create Company -------------------------------------//

const createCompany = ()=> {
  const newCompany = {
    id : faker.datatype.uuid(),
    companyName: faker.company.name(),
    address : [{ "street" : faker.address.street(),
                "city" : faker.address.city(),
                "state" : faker.address.state(),
                "zipCode" : faker.address.zipCode() ,
                "country" : faker.address.country(),}]

  }
  return newCompany;
}
const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/company" , (req,res)=>{
  res.json({newFakeCompany});
})

// -----------------------------------------------------------------------------------------------------//


app.get("/api/user/company" , (req,res)=>{
    res.json({newFakeUser,newFakeCompany});
})

app.listen(port)
