const converterBtn = document.querySelector(".convert-btn");
const result = document.querySelector(".result");
amount = parseFloat(amount);
let ans;

converterBtn.addEventListener("click",convert)

function convert() {
	var amount = document.querySelector("#amount").value;
	var currency = document.querySelector("#from").value;
	var toCurrency = document.querySelector("#to").value;
	if(currency == "USD" && toCurrency == "AFS") {
		 ans  = Math.round(amount * 77.1450);
	}
	if(currency == "AFS" && toCurrency == "USD") {
		ans = amount * 0.013;
	}
	if(currency == "EUR" && toCurrency == "AFS") {
		ans = Math.round(amount * 95.02);
	}
	if(currency == "AFS" && toCurrency == "EUR") {
		ans = Math.round(amount * 0.011);
	}
	if(currency == "GBP" && toCurrency == "AFS") {
		ans = amount * 107.26;
	}
	if(currency == "AFS" && toCurrency == "GBP") {
		ans = Math.round(amount * 0.0093);
	}
	if(currency == "JPY" && toCurrency == "AFS") {
		ans = amount * 0.76	;
	}
	if(currency == "AFS" && toCurrency == "JPY") {
		ans = amount * 1.32;
	}
	if(currency == "INR" && toCurrency == "AFS") {
		ans = amount * 1.07;
	}
	if(currency == "AFS" && toCurrency == "INR") {
		ans = amount * 0.94;
	}
	if(currency == "USD" && toCurrency == "EUR") {
		ans = amount * 0.82;
	}
	if(currency == "EUR" && toCurrency == "USD") {
		ans = amount * 1.21;
	}
	if(currency == "USD" && toCurrency == "GBP") {
		ans = amount * 0.73;
	}
	if(currency == "GBP" && toCurrency == "USD") {
		ans = amount * 1.37;
	}
	if(currency == "USD" && toCurrency == "JPY") {
		ans = amount * 103.38;
	}
	if(currency == "JPY" && toCurrency == "USD") {
		ans = amount * 0.0097;
	}
	if(currency == "EUR" && toCurrency == "GBP") {
		ans = amount * 0.89;
	}
	if(currency == "GBP" && toCurrency == "EUR") {
		ans = Math.round(amount * 1.13);
	}
	if(currency == "EUR" && toCurrency == "JPY") {
		ans = amount * 125.86;
	}
	if(currency == "JPY" && toCurrency == "EUR") {
		ans = amount * 0.0079;
	}
	if(currency == "GBP" && toCurrency == "JPY") {
		ans = amount * 142.06;
	}
	if(currency == "JPY" && toCurrency == "GBP") {
		ans = amount * 0.0070;
	}
	if(currency == "USD" && toCurrency == "INR") {
		ans = amount * 73.05;
	}
	if(currency == "INR" && toCurrency == "USD") {
		ans = amount * 0.014;
	}
	if(currency == "EUR" && toCurrency == "INR") {
		ans = amount * 88.82;
	}
	if(currency == "INR" && toCurrency == "EUR") {
		ans = amount * 0.011;
	}
	if(currency == "GBP" && toCurrency == "INR") {
		ans = amount * 99.90;
	}
	if(currency == "INR" && toCurrency == "GBP") {
		ans = amount * 0.010;
	}
	if(currency == "JPY" && toCurrency == "INR") {
		ans = amount * 0.70;
	}
	if(currency == "INR" && toCurrency == "JPY") {
		ans = amount * 1.42;
	}
	if(currency == toCurrency) {
		ans = amount;
	}
	result.innerHTML = `${amount} ${currency} = ${ans} ${toCurrency}`
	result.style.color = "#fff"
	if(currency == "none" && toCurrency == "none" || currency == "none" || toCurrency == "none") {
		result.innerHTML = "Please select a currency to convert"
		result.style.color = "#b40021"
	}
}