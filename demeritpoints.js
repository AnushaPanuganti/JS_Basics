//Speed Limit = 70
//5 ->1 point
//math.floor(1.3)-->1 math.floor(74)-->70
//12 points->license suspended
checkSpeed(74);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerpoint = 5;
    if (speed < speedLimit + kmPerpoint){
        console.log('Ok');  //here kmperpoint is added coz from 75 onwards we are getting points,so below 75 it is considered 'ok'
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerpoint);      //if speed is 80-->80-70=10 10/5=2,or if speed is 79--> 79-70=9 9/5=1.8-->floor(1.8)=1
    if (points >= 12) 
        console.log("License suspended");
    else
        console.log('Points', points);
    
}