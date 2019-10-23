const user = {
    firstName: 'John', // string
    lastName: 'Doe', // string
    rate: 0.86, // number in range 0..1
    address: { // not empty object or null
        line1: '15 Macon St', // string
        line2: '', // string
        city: 'Gotham' // string
    },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
            number: '(555) 555-1234' // string in specific format
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};


for (var objKey in user) {
    if (objKey == 'firstName' && typeof user[objKey] == 'string') {
        console.log('User firstname is ok');
    }
    if (objKey == 'lastName' && typeof user[objKey] == 'string') {
        console.log('User lastName is ok');
    }
    if (objKey == 'rate' && !isNaN(user[objKey]) && (user[objKey] >= 0 && user[objKey] <= 1)) {
        console.log('Rate good');
    }
    if (objKey == 'address' && user[objKey]) {
        console.log('User address is ok');
        for (let objAddress in user[objKey]) {
            console.log(objAddress)
            if (objAddress == 'line1' && typeof user[objKey][objAddress] == 'string') {
                console.log('User line1 is ok');
            }
            if (objAddress == 'line2' && typeof user[objKey][objAddress] == 'string') {
                console.log('User line2 is ok');
            }
            if (objAddress == 'city' && typeof user[objKey][objAddress] == 'string') {
                console.log('User city is ok');
            }
        }
    }
    if (objKey == 'phoneNumbers' && user[objKey].length > 0) {
        console.log('User phoneNumbers is ok', user[objKey]);
        user[objKey].forEach((element, i) => {
            console.log("ELEMENT", element)
            if (element.type && element.number &&
                element.type == ('MOBILE' || 'LINE' || 'VIOP') &&
                /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/.test(element.number)) {
                console.log('good')
            }
        });
    }
}