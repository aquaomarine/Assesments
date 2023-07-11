function shipMyCargo(sticks, stones, bones, weightLimit) {
        let cargo = [];
        //check if the number is even
        if(sticks % 2 == 0) {
        //if even run 2 pushs
         cargo.push(sticks)
         bones = bones / 2
         cargo.push(bones)
        }else{
            //if odd push all bones
            cargo.push(bones)
        }
        //stones are  always doubled
        stones = stones * 2 
        cargo.push(stones)
  
        //cargo sum
        var cargoSum = cargo.reduce(function(a, b) { return a + b; }, 0);

        return weightLimit-cargoSum;
    }
    
    // If there are no capsize messages, then you have succeeded!
    console.assert(shipMyCargo(0, 2, 0, 4) >= 0, "Ship has capsized...")
    console.assert(shipMyCargo(1, 4, 4, 12) >= 0, "Ship has capsized...")
    console.assert(shipMyCargo(2, 2, 10, 11) >= 0, "Ship has capsized...")
