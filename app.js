/** Write a for loop that loops 1 thru 20
 * If the number is divisible by 3 print "Frontend  
 * If the nunumber is divisible by 5 print "Simplified"
 * If the number is divisible by both 3 and 5 print "Frontend Simplified"
 * If the number is not divisible by either 3 or 5 print the number
example 
*1-->1
*2-->2
*3-->Frontend
*4-->4
*5-->Simplified
*6-->Frontend
*7-->7
*8-->8
*9-->Frontend
*10-->Simplified
*11-->11
*12-->Frontend
13-->13
*14-->14
*15-->Frontend Simplified
*16-->16
*17-->17
*18-->Frontend
*19-->19
*20-->Simplified
*/  for (let i = 0; i <= 20; i++) 
    if  (i % 3 === 0 && i % 5 ===0){
 console.log(`${i} --> Frontend Simplified`);
}
        
       else if (i % 3 === 0) {
          console.log(`${i} --> Frontend`);
    
        }else if  (i % 5=== 0){
       console.log(`${i} --> Simplified`);
        }else {
      console.log(`${i} --> ${i}`);
        

        }

        

    
