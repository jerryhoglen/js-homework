var addressApartmentNumber = [100, 200, 300, 400, 500];
var addressNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var addressStreetName = ["Hill", "Cliff", "Long", "Apple", "Ocean", "West"];
var addressKind = ["Ave", "St", "Dr", "Circle"];
var addressCity = ["Brooklyn", "Queens", "Manhattan", "Staten Island", "Bronx"];
var addressState = ["New York", "Connecticut", "New Jersey", "Massachusettes", "Maine"];
var addressZipCode = [10000, 10001, 10002, 10003, 10004];
var pickAnAddress = function() {
    var todaysApartmentNumber = addressApartmentNumber[Math.floor(Math.random() * addressApartmentNumber.length)];
    var todaysNumber = addressNumber[Math.floor(Math.random() * addressNumber.length)];
    var todaysStreetName = addressStreetName[Math.floor(Math.random() * addressStreetName.length)];
    var todaysAddressKind = addressKind[Math.floor(Math.random() * addressKind.length)];
    var todaysCity = addressCity[Math.floor(Math.random() * addressCity.length)];
    var todaysState = addressState[Math.floor(Math.random() * addressState.length)];
    var todaysZipCode = addressZipCode[Math.floor(Math.random() * addressZipCode.length)];
    if (todaysNumber > 5) {
        console.log("Your random address is ", todaysApartmentNumber, todaysNumber, todaysStreetName, todaysAddressKind, todaysCity, todaysState, todaysZipCode);
    } else {
        console.log("Your random address is ", todaysNumber, todaysStreetName, todaysAddressKind, todaysCity, todaysState, todaysZipCode);
    }
}
pickAnAddress();
