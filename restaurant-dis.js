const age = 14;
const price = 500;

if ( age < 12) {
    console.log('you can it for free')
}
else if(age > 55){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 13){
    const discount = price * 40 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price);
}
