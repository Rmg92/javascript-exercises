const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        oldestPerson =  getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        currentPerson = getAge(current.yearOfDeath, current.yearOfBirth);
        if (oldestPerson < currentPerson) {
            return current;
        } else {
            return oldest;
        }
    })   
};

const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
