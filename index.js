// Code your solution in this file!

function distanceFromHqInBlocks (street) {
    if (street > 42) {
	    return street - 42;
	} else {
	    return 42 - street;
	}
}
	
	function distanceFromHqInFeet (street) {
	return distanceFromHqInBlocks(street) * 264;
}
	
	function distanceTravelledInFeet (begin, finish) {
	if (begin < finish) {
	    return (finish - begin) * 264;
	} else {
	    return (begin - finish) * 264;
	}
}
	
	function calculatesFarePrice (begin, finish) {
	const distance = distanceTravelledInFeet(begin, finish);
	
	if (distance <= 400) {
	    return 0;
	} else if (distance > 400 && distance <= 2000) {
	    return .02 * (distance - 400);
	} else if (distance > 2000 && distance < 2500) {
	    return 25;
	} else {
	    return 'cannot travel that far';
	}
}

