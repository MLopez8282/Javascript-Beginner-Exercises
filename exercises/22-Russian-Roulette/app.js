var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = () => {
    if(bulletPosition == spinChamber()){
        return 'You\'re dead!';
    } 
    else {
        return 'Keep playing!'
    }
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
};

console.log(fireGun())
//console.log(fireGun(...));