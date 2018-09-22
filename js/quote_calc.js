result = document.getElementById("result");
result.innerHTML = "";
var form_items = ["form_name","form_age","country","form_hp","calc"];
form_items.forEach(activate_form);

document.getElementById("calc").className = ("enabled");
document.getElementById("country").innerHTML = "<option value='Austria'>Austria</option><option value='Hungary'>Hungary</option><option value='Greece'>Greece</option>";

function activate_form(item, index) {
	document.getElementById(item).disabled = false;
}

function calculateInsurance() {
	var name = document.insurance.YourName.value;
	var age = Number(document.insurance.age.value);
	var country = document.insurance.country.value;
	var hp = Number(document.insurance.hp.value);
	if (name.length < 1 || Number(name)) {
		err("Please enter your name");
		return;
	}
	if (age == "" || isNaN(age)) {
		err("Please enter your age");
		return;
	} else if (age < 16) {
		err("You need to be at least 16 to be eligible.");
		return;
	} else if (age > 100) { 
		err("I am sorry, you are too old to drive a car...");
		return;
	}
	if (hp == "" || isNaN(hp) || hp < 1) {
		err("Please enter the Horsepower of your car");
		return;
	}
	var price = calculateInsurancePerCountry(hp, age, country);
	if (price == false) {
		err("Sorry, your country is not supportet")
	} else {
	result.className = ("green");
	result.innerHTML = name+", your insurance costs "+price.toFixed(2)+"&euro;";
	}
}

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

function err(text) {
	result.className = ("red");
	result.innerHTML = text;
}
 
 document.getElementById("calc").addEventListener("click", calculateInsurance);