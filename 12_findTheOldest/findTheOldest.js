const findTheOldest = function(people) {
    function getAge(person) {
        if (person.yearOfDeath === undefined) {
            return new Date().getFullYear() - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    }

    return people.reduce((previousPerson, currentPerson) => {
        return getAge(previousPerson) > getAge(currentPerson) ? previousPerson : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
