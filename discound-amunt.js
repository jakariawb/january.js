const age = 1;
const price = 500;
 
if (age <= 12){
    console.log('free for everything');
}

else if (age >= 60){
    // kono main basi bojaita abong somon bojata hola ay sine >= youse korvo
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 40){
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 30) {
    const discount = price * 100 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price)
}