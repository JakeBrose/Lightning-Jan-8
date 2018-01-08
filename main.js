let customers = {
    active: {
        a87b6345: {
            name: "Gary Harrison",
            age: 23,
            member_level: "gold"
        },
        b345hy66: {
            name: "Harry Garrison",
            age: 34,
            member_level: "silver"
        },
        nh56yht8: {
            name: "Mary Terryson",
            age: 78,
            member_level: "platinum"
        },
        j677yd456: {
            name: "Barry Sonnyman",
            age: 44,
            member_level: "gold"
        }
    },
    inactive: {
        ur56tfgt: {
            name: "Barb Justice",
            age: 56,
            member_level: "none"
        },
        d56gt6: {
            name: "Jane L'eggo",
            age: 11,
            member_level: "none"
        }
    }
}
//Personal Attempt = Failed//
// for (const i in customers) {
//     if (customers.hasOwnProperty(i)) {
//         const element = customers[i];
//         console.log('customers',customers);
//     } customers.active.key0 = "id:"
//       console.log('customers.active.key0',customers.active.key0);
   
// }
//////////////////////////////////////


for ( let status in customers ) {
    let keys = Object.keys(customers[status])
    //creates array of objects within customers.active//
    console.log('keys',keys);
    keys.forEach ((key) => {
        customers[status][key].id = key;
        //loops through the array and adds the key id of a desired value//
        console.log('customers',customers);
    })
}