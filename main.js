import users from './users.js';

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.map(user => user.name);
};

console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    const filteredByEyeColor = users.filter(user => user.eyeColor === color);
    return filteredByEyeColor;
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    const filteredByGender = users
        .filter(user => user.gender === gender)
        .map(user => user.name);
    return filteredByGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
     
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
    return users.reduce((accomulator, user) => accomulator + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    const UsersWIthFriends = users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
    return UsersWIthFriends  
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
    const NamesSortedByFriendsCount = [...users]
        .sort((prevArray, nextArray) => prevArray.friends.length - nextArray.friends.length)
        .map(user => user.name);
    return NamesSortedByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений 
// и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
    
//     const allSkills = users
//         .reduce((acc, user) => {
//             acc.push(...user.skills)
//             return acc;
//         }, [])
//         .sort((prev, next) => {
//             if (prev.toLowerCase() < next.toLowerCase()) {
//                 return -1;
//             } if (prev.toLowerCase() > next.toLowerCase()) {
//                 return 1;
//             } return 0;
//         });

//     const uniqueArray = allSkills.filter(function (item, index){ 
//         return allSkills.indexOf(item) === index;
//     })
//     return uniqueArray;
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// второй способ решения

const getSortedUniqueSkills = users => {
    const allSkillsSorted = users
        .reduce((acc, user) => {
            const allSkills = user.skills.filter(skill => !acc.includes(skill));
            acc.push(...allSkills)
            return acc;
        }, [])
        .sort();
    return allSkillsSorted
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

