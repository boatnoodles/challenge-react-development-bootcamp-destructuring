const user = {
    id: 101,
    email: 'josh@nextacademy.com',
    personalInfo: {
        name: 'Josh',
        address: {
            line1: 'AG-7, Glomac Damansara',
            state: 'Kuala Lumpur',
            country: 'Malaysia'
        }
    }
}

const {
    email, 
    personalInfo: {
        address:{
            line1, state, country}
        }
} = user

const josh = {
    gender: 'male',
    email: email,
    address: `${line1} ${state}, ${country}`
}

console.log(josh)