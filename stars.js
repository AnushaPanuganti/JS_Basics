showStars(3);

function showStars(rows) {
    for (let i=0;i<rows;i++){       //0 to 9 rows
        let pattern = '';
        for (let j=0;j<i+1;j++) {   //say for 3rd row..i=2 then j is printed for 2+1 times that is 0 to 2 times
            pattern += '*'
        }console.log(pattern);

    }
}