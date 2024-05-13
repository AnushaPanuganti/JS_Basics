const marks = [80,60,50];
//average = 70
//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrades(marks));

function calculateGrades(marks) {
    let sum = 0;
    for (let i=0; i<marks.length;i++){                      //can also use for-of loop i.e,let mark of marks,sum+=mark
        sum += marks[i];
        avg = sum/marks.length;
    }
    if (avg >= 1 && avg <= 59) return "F";
    if (avg >= 60 && avg <= 69) return "D";
    if (avg >= 70 && avg <= 79) return "C";
    if (avg >= 80 && avg <= 89) return "B";
    if (avg >= 90 && avg <= 100) return "A";
           
}
