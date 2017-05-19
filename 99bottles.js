// Print the lyrics to "99 bottles of beer on the wall"

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer. 
// Go to the store and buy some more, 99 bottles of beer on the wall.


var bottles;
for (numBeers = 99; numBeers >= 1; numBeers = numBeers - 1) {
    if (numBeers == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(numBeers + " " + bottles + " of beer on the wall.");
    if (numBeers < 99) {
        console.log("");
        console.log(numBeers + " " + bottles + " of beer on the wall.");
    }
    console.log(numBeers + " " + bottles + " of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (numBeers == 1) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}
