const inputFields = [
    {
        label: 'First Name',
        name: 'fname',
        type: 'text',
        errMsg: 'First name must be contain 3-16 english letters only'
    },
    {
        label: 'Last Name',
        name: 'lname',
        type: 'text',
        errMsg: 'Last name must be contain 3-16 english letters only'
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        errMsg: 'Email must contain @ and . as special characters'
    },
    {
        label: 'Password',
        name: 'pwd',
        type: 'password',
        errMsg: 'Password must be alphanumeric (@, _ and - are also allowed) and between 6-20 characters'
    },
    {
        label: 'Telephone',
        name: 'tel',
        type: 'tel',
        errMsg: 'A valid telephone number must contain 10 digits'
    },
    {
        label: 'Your Bio',
        name: 'bio',
        type: 'text',
        errMsg: 'Bio must contain english letters, space, hyphen, dot and between 8-50 characters'
    }
];

export default inputFields;