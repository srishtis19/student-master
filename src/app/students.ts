export interface student {
    _id:any,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    country:string,
    state: string,
    studentHobbies: string[]
}
// export const studentData = [
//     {
//       "index": 0,
//       "name": "Rosie Cameron",
//       "age": 11,
//       "gender": "female",
//       "city": " Ivanhoe",
//       "state": "Washington",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 1,
//       "name": "Lindsey Colon",
//       "age": 16,
//       "gender": "male",
//       "city": " Mappsville",
//       "state": "Kansas",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 2,
//       "name": "Neva Townsend",
//       "age": 8,
//       "gender": "female",
//       "city": " Springhill",
//       "state": "Michigan",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 3,
//       "name": "April Wilkins",
//       "age": 15,
//       "gender": "female",
//       "city": " Day",
//       "state": "Mississippi",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 4,
//       "name": "Leanna Pratt",
//       "age": 7,
//       "gender": "female",
//       "city": " Fairmount",
//       "state": "West Virginia",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 5,
//       "name": "Camille Bradford",
//       "age": 18,
//       "gender": "female",
//       "city": " Hayes",
//       "state": "Palau",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 6,
//       "name": "Fuentes Garrison",
//       "age": 10,
//       "gender": "male",
//       "city": " Harold",
//       "state": "Delaware",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 7,
//       "name": "Harvey Franklin",
//       "age": 12,
//       "gender": "male",
//       "city": " Greenwich",
//       "state": "Alabama",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 8,
//       "name": "Juliette Vance",
//       "age": 10,
//       "gender": "female",
//       "city": " Catherine",
//       "state": "Pennsylvania",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 9,
//       "name": "Cole Hamilton",
//       "age": 5,
//       "gender": "male",
//       "city": " Nipinnawasee",
//       "state": "Vermont",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 10,
//       "name": "Rochelle Garrett",
//       "age": 7,
//       "gender": "female",
//       "city": " Hannasville",
//       "state": "Hawaii",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 11,
//       "name": "Hampton Meyers",
//       "age": 9,
//       "gender": "male",
//       "city": " Inkerman",
//       "state": "Iowa",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 12,
//       "name": "Jane Curry",
//       "age": 16,
//       "gender": "female",
//       "city": " Boomer",
//       "state": "Nevada",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 13,
//       "name": "Stone Shields",
//       "age": 14,
//       "gender": "male",
//       "city": " Islandia",
//       "state": "North Dakota",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 14,
//       "name": "Margie Harrison",
//       "age": 11,
//       "gender": "female",
//       "city": " Hasty",
//       "state": "Connecticut",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 15,
//       "name": "Alston Barry",
//       "age": 8,
//       "gender": "male",
//       "city": " Ona",
//       "state": "Arkansas",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 16,
//       "name": "Alisha Burris",
//       "age": 12,
//       "gender": "female",
//       "city": " Williamson",
//       "state": "Arizona",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 17,
//       "name": "Georgina Winters",
//       "age": 11,
//       "gender": "female",
//       "city": " Shawmut",
//       "state": "Massachusetts",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 18,
//       "name": "Whitney Fulton",
//       "age": 17,
//       "gender": "male",
//       "city": " Garberville",
//       "state": "District Of Columbia",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     },
//     {
//       "index": 19,
//       "name": "Valerie Benson",
//       "age": 18,
//       "gender": "female",
//       "city": " Joes",
//       "state": "Florida",
//       "hobbies": [
//         "reading",
//         "singing",
//         "dancing"
//       ]
//     }
//   ]