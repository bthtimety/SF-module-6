const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for(let key in obj) {

    let value = obj[key];

    if(!Array.isArray(value)) {
        arrValues.push(value);
    }

    else {
        for(let i of value){
            arrValues.push(i);
        }
    }

}

console.log(arrValues);