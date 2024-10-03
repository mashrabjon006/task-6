// 1. **1 dan 5 gacha bo‘lgan sonlarni ekranga chiqaring.**

// for (var i = 1; i <= 5; i++){
//     console.log(i)
// }

// 2. **1 dan 20 gacha bo‘lgan barcha sonlarni ekranga chiqaring.**

// for (var i = 1; i <= 20; i++){
//     console.log(i)
// }

// 3. **Foydalanuvchi tomonidan kiritilgan sonning kvadratini 
//  1 dan shu songacha bo‘lgan qiymatlar uchun ekranga chiqaring.**

// var kv = prompt('sonni kiriting')

// for (var i = 1; i <= kv; i++){
//     console.log( i +  ' ning kvadrati: ' + (i*i))
// }

// 4. **0 dan 10 gacha bo‘lgan juft sonlarni ekranga chiqaring.**

// for (var i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// 5. **1 dan 15 gacha bo‘lgan barcha toq sonlarni ekranga chiqaring.**

// for (var i = 1; i <= 15; i++){
//     if(i % 2 == 1){
//         console.log(i)
//     }
// }

// 6. **Foydalanuvchi tomonidan kiritilgan 5 ta sonni ekranga chiqaring.**

// for (var i = 1; i <= 5;i++){
//     var d = +prompt( d + '5soni kiriting')
// console.log(d)

// }
// 7. **5 dan 15 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.**

// for (var i = 15; i >= 5; i--){
//     console.log(i)
// }
// 8. **Foydalanuvchi tomonidan kiritilgan sonning 1 dan o‘sha sonlargacha bo‘lgan ko‘paytuvchilarini ekranga chiqaring.**

// var a = prompt('') 
// for (var i = 1; i <= a; i++){
//     if (a % i == 0){
//         console.log(i)
//     }
// }

// 9. **Foydalanuvchi tomonidan kiritilgan 10 ta sonning yig‘indisini hisoblab ekranga chiqaring.**

// var sum = 0;  

// for (var i = 1; i <= 10; i++) {  
//     var num = prompt(i + "-sonni kiriting:");  
//     num = parseFloat(num);  
//     sum += num;  
// }

// console.log("Yig'indi: " + sum);  


// 10. **1 dan 50 gacha bo‘lgan sonlardan 5 ga bo‘linadiganlarini ekranga chiqaring.**

// for (var i = 1; i <=50; i++){
//     if(i % 5 == 0){
//         console.log(i)
        
//     }
// }

// 11. **100 dan 1 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.**

// for (var i = 100; i >= 1; i--){
//     console.log(i)
// }

// 12. **1 dan 100 gacha bo‘lgan sonlarning yig‘indisini hisoblab, natijani ekranga chiqaring.**

// for (var i = 1; i <= 100; i++){
//     i *=i
// }console.log(i)

// 13. **Foydalanuvchi tomonidan kiritilgan ikki son orasidagi barcha sonlarni ekranga chiqaring.**

// var a = parseInt(prompt(" "));  
// var b = parseInt(prompt(" "));  

// if (a > b) {
//     var temp = a;  
//     a = b;
//     b = temp;
// }

// for (var i = a; i <= b; i++) {
//     console.log(i);  
// }


// 14. **Foydalanuvchi tomonidan kiritilgan sonning bo‘linuvchilarini toping va ekranga chiqaring.**
// var a = prompt('')
// for (var i = 1; i<=a; i++){
//     if (a % i == 0){
//         console.log(i)
//     }
// }

// 15. **1 dan 20 gacha bo‘lgan sonlarning kvadratlarini ekranga chiqaring.**

// for (var i = 1; i<=20; i++){
//    var a = i * i
// console.log(a)

// }


// 16. **1 dan 100 gacha bo‘lgan sonlar orasidan faqat 7 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring.**

// for (var i = 1; i <=100; i++){
//          if(i % 7 == 0){
//              console.log(i)
            
//         }
// }

// 17. **1 dan 10 gacha bo‘lgan sonlarning ko‘paytma jadvalini ekranga chiqaring.**

// 18. **Foydalanuvchi tomonidan kiritilgan sonning barcha bo‘linuvchilarini toping va ularning yig‘indisini ekranga chiqaring.**

// var a = prompt()

// for (var i = 0; i <= a; i++){
//     if( a % i == 0){
//         var b = i+i
//     }
// }
// console.log(b)


// 19. **1 dan 50 gacha bo‘lgan sonlarning orasidan toq sonlar yig‘indisini hisoblab, natijani ekranga chiqaring.**

// for(var i = 1; i <= 50; i++){
//     if(i % 2 ==1){
//        var b = i += i
//     }
// }console.log(b)

// 20. **Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi barcha juft sonlarni ekranga chiqaring.**


//  var a = parseInt(prompt(" "));  
//  var b = parseInt(prompt(" ")); 

//  if (a > b) {
//      var temp = a;  
//      a = b;
//      b = temp;
//  }
//  for (var i = a; i <= b; i++) {
//      if (i % 2 == 0){
//         console.log(i)
//      }
//  }

// 21. **1 dan 100 gacha bo‘lgan sonlarning ichida faqat toq sonlar yig‘indisini ekranga chiqaring.**

// for(var i = 1; i <= 100; i++){
//          if(i % 2 ==1){
//             var b = i += i
//          }
//      }console.log(b)

// 22. **Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring.**

// 23. **1 dan 50 gacha bo‘lgan barcha sonlarni ekranga chiqaring, lekin faqat 3 va 5 ga bo‘linadigan sonlarni chiqarmang.**

// for (var i = 1; i<=50; i++){
//     if( i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i)
//     }   
// }

// 24. **1 dan 30 gacha bo‘lgan sonlar ichida 4 va 6 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring.**

// for (var i = 1; i<=30; i++){
//     if( i % 4 == 0 && i % 6 == 0) {
//         console.log(i)
//     }   
// }

// 25. **Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi sonlardan faqat toq sonlarni ekranga chiqaring va ularning yig‘indisini toping.**

  
var a = parseInt(prompt(""))  
var b = parseInt(prompt(""))

if (a > b) {
    var c = a 
    a = b
    b = c
}

var b = 0; 
for (var i = a; i <= b; i++) {
    if (i % 2 == 1) { 
        console.log(i)
        b += i
    }
}

console.log(" yig'indisi: " + b)