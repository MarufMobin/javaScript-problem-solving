//Coding challenge #1: Print numbers from 1 to 10

// for( i = 0; i <= 10; i++ ){
//     console.log(i);
// }

/* for( i = 1; i <= 10; i++ ){
    console.log( i );
} */

// Coding challenge #2: Print the odd numbers less than 100

    // for( i = 1; i < 100 ; i++){
    //     if( i % 2 == 1 ){
    //         console.log(i);
    //     }
    // } 

    /* for( i = 1; i < 100; i++ ){
        if( i % 2 == 1 ){
            console.log( i );
        }
    } */

// Coding challenge #3: Print the multiplication table with 7

    // let tableOfNumber = 6;

    // for( i = 1; i <= 10; i++ ){

    //     let resultOfMultipication = tableOfNumber * i;
    //     let stracture = tableOfNumber + " X " + i + " = " + resultOfMultipication;
    //     console.log( stracture );

    // } 

    /* let givenNumber = 8;

    for( i = 1; i <= 10; i++){
        let multipicationOfNumber = givenNumber * i;
        let restulOfTable = givenNumber + " X " + i + " = " + multipicationOfNumber;

        console.log( restulOfTable );
    } */



// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

    // for( let i = 1; i <= 10; i++ ){
    //     let n = i;
    //     printOfTables( n );
    //     console.log(" ")
    // } 
    
    // function printOfTables( n ){
    //     for( let i = 1; i <= 10; i++ ){
    //         let row = i + " * " + n + " = " + n * i ;
    //         console.log( row );
    //     }
       
    // }

// Problem no 4
    /* for( let i = 1; i <= 10; i++ ){
        let n = i;
        tableNubers( n );
        console.log( " " );
    }

    function tableNubers( n ){

        for( let i = 1; i <= 10; i++ ){
            let row = n + " * " + i + " = " + i * n;

            console.log(row);
        }
    } */

    

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

    // let sum = 0;

    // for( i = 1; i <= 10; i++ ){
    //     sum += i;
    // }
    // console.log(sum);

    // let sum = 0;

    // for( i = 1; i <= 10; i++ ){
    //     sum += i;
    //     // console.log( "inner for loop",sum);
    // }
    // console.log( sum );

// Coding challenge #6: Calculate 10!

   /*  let numbers = 1;
    let givenNumber = 5;
    for( let i = givenNumber; i >= 1; i-- ){
        numbers *= i;
    }
    console.log(numbers) */

// factorial define 

    let number = 5;
    let result = 1;

    for( let i = 1; i <= number; i++){

        result *= i;
    }

    console.log(result);

