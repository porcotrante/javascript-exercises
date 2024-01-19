const findTheOldest = function(arr) {
    arr = arr.sort((a,b) => {
        let ageA;
        let ageB;

        if (a.yearOfDeath == undefined) {
            ageA = new Date().getFullYear() - a.yearOfBirth;
        }

        else{
            ageA = a.yearOfDeath - a.yearOfBirth;
        }

        if (b.yearOfDeath == undefined) {
            ageB = new Date().getFullYear() - b.yearOfBirth;
        }

        else{
            ageB = b.yearOfDeath - b.yearOfBirth; 
        }

        console.log(ageB);

        if (ageA < ageB) {
            return 1;
        }

        return -1;
    });

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
