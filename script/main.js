// const letters = {0:'0', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'a', 11:'b', 12:'c', 13:'d', 14:'e', 15:'f'}
const letters = "0123456789abcdef"


const handleClick = () => {
    //  let color = Math.floor(Math.random()*1000000) ;
    //  let bgc = "#" + color.toString();

    // console.log(color);
    // document.getElementById('txt').innerHTML = "The hex code of the color is " + bgc;
    // document.body.style.backgroundColor = bgc;


    let color = letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)];
    let bgc = "#" + color.toString();

    console.log(color);
    document.getElementById('txt').innerHTML = "This color is " + bgc;
    document.body.style.backgroundColor = bgc;
}

// setInterval(() => {
//     handleClick();
// }, 1000);