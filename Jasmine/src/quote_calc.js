function calculateInsurancePerCountry(hp, age, country) {
	if (country == "Austria") {
		return hp * (100 / age) + 50;
	} else if (country == "Hungary") {
		return hp * (120 / age) + 100; 
	} else if (country == "Greece") {
		return hp * ( 150 / (age +3)) + 150;
	} else {
		return false
	}
}