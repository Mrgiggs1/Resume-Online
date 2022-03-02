const num = [12,9,5,4,6,3,2,1,8,10,7,11];


console.log(num.sort(
        function(num1,num2)
        {
            if(num1 > num2)
            {
                return 1;
            }
            else if(num2>num1){
                return -1;
            }
        }
    ));
    console.log(num[2]);

        // letters sort and to upper
    const letters = ['a','b','f','c'];

       console.log(letters.map( (letters) => letters.toUpperCase()).sort());
    //    OR
    console.log(
            letters.map( 
            function(letters)
            {
                return letters.toUpperCase()
            }).sort()
    );



