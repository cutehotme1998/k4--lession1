// 1.Viết một hàm JavaScript để kiểm tra xem một 'input' có phải là một chuỗi hay không.
// const text ="w3resource";
// console.log(typeof "w3resource");


// 2.Viết một hàm JavaScript để kiểm tra xem một chuỗi rỗng không.
// cach1:
// const text ="abc";
// console.log(typeof "abc");

// cach2:
// const text = "abc";
// let is_blank = true;
// if (text) {
//     is_blank = true
// }
// if (text==''){
//     is_blank = false
// }
// console.log(is_blank);

// const text2= "";
// let is_blank2 = true;
// if(text2 ===''){
//     is_blank = true
// }
// if(text2!==''){
//     is_blank2 = false
// }
// console.log(is_blank2);



// 3.Viết một hàm JavaScript để chia một chuỗi và chuyển nó thành một mảng các từ.
// const text= "Robin Singh";
// const text1= text.split(" ");
// console.log(text1); 


// 4.Viết một hàm JavaScript để trích xuất một số ký tự cụ thể từ một chuỗi.
// console.log(truncate_string("Robin Singh", 4));
// const str = "Robin Singh";
// const slice = str.slice(0, 4);
// console.log(slice);


// 5.Viết một hàm JavaScript để chuyển đổi một chuỗi thành dạng viết tắt.
// Ví dụ:
// console.log(abbrev_name("Robin Singh")); "Robin S."
// const text ="Robin Singh";
// const tach= text.split(" ");
// console.log(tach);
// const name1= tach[0];
// const name2= tach[1];
// const fistChar = name2.charAt(0);
// console.log(fistChar);
// const finalName = `${name1} ${firstChar}.`;
//  console.log(finalName);



// 6.Viết một hàm JavaScript để ẩn địa chỉ email để ngăn truy cập trái phép.
// Ví dụ: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"
 
// chưa làm đc 


// 7.Viết một hàm JavaScript để chuyển một chuỗi về dạng tốt cho SEO.
// Ví dụ: console.log(string_slugify("Robin Singh from USA.")); "robin-singh-from-usa"
//  const text = "Robin Singh from USA."; 
//  const split = text.split(" "); 
//  //console.log(split);
//  const r= split[0].charAt(0).toLowerCase();
//  const conLai1= split[0].slice(1);
//  const text1 =`${r}${conLai1}`;
//  const s= split[1].charAt(0).toLowerCase();
//  const conLai2= split[1].slice(1);
//  const text2 =`${s}${conLai2}`;
//  // console.log(text1);
//  const text4 = split[3].toLowerCase();
//  console.log(text4);
//  const finalText4 = text4.replace(".","");
//  console.log(finalText4);
//  const newText = `${text1}-${text2}-${split[2]}-${finalText4}`;
//  console.log(newText);

// 1.Viết một hàm JavaScript để viết hoa ký tự đầu tiên trong một chuỗi.

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalize('js string exercises'));

//  8. Viết một hàm JavaScript để viết hoa ký tự đầu tiên của mỗi từ trong một chuỗi.
//  console.log(capitalize_Words('js string exercises'));"Js String Exercises"

// cach 1:
//  const text =  "js string exercises";
//  const split = text.split(" ");
//  const text1 = `${split[0].charAt(0).toUpperCase()}${split[0].slice(1)}`;
//  const text2 = `${split[1].charAt(0).toUpperCase()}${split[1].slice(1)}`;
//  const text3 = `${split[2].charAt(0).toUpperCase()}${split[2].slice(1)}`;
//  const newText =`${text1} ${text2} ${text3}`;
//  console.log(newText);

// cach2:
//  const text1 = split[0].charAt(0).toLowerCase();
//  const conLai1= split[0].slice(1);
//  const newText1= `${text1}${conLai1}`;
//  const text2 = split[1].charAt(0).toLowerCase();
//  const conLai2= split[1].slice(1);
//  const newText2= `${text2}${conLai2}`;
//  const text3 = split[2].charAt(0).toLowerCase();
//  const conLai3= split[2].slice(1);
//  const newText3= `${text3}${conLai3}`;
//  const newText =`${newText1} ${newText2} ${newText3}`;
//  console.log(newText);


// 9.Viết một hàm JavaScript nhận một chuỗi chứa cả ký tự thường và ký tự in hoa làm tham số. 
// Hàm này chuyển đổi ký tự in hoa thành ký tự thường và ngược lại.

// const text = "AaBbc";
// const split= text.split("");
// const char1= split[0].toLowerCase();
// const char2= split[1].toLowerCase();
// const char3= split[2].toLowerCase();
// const char4= split[3].toLowerCase();
// const char5= split[4].toLowerCase();
// if (split[0] == char1) {
//     result = true
//   } else {
//     result = false
//   }
//   console.log(result);
//   if (split[1] == char2) {
//     result = true
//   } else {
//     result = false
//   }
//   console.log(result);
//   if (split[2] == char3) {
//     result = true
//   } else {
//     result = false
//   }
//   console.log(result);
//   if (split[3] == char4) {
//     result = true
//   } else {
//     result = false
//   }
//   console.log(result);
//   if (split[4] == char5) {
//     result = true
//   } else {
//     result = false
//   }
// console.log(result);
// const newChar1= split[0].toLowerCase();
// const newChar2= split[1].toUpperCase();
// const newChar3= split[2].toLowerCase();
// const newChar4= split[3].toUpperCase();
// const newChar5= split[4].toUpperCase();
// const newText= `${newChar1}${newChar2}${newChar3}${newChar4}${newChar5}`;
// console.log(newText);

// 10. Viết một hàm JavaScript để chuyển đổi một chuỗi thành dạng Camel Case.
// Ví dụ:
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

// chưa làm được

// 11.Viết một hàm JavaScript để chuyển đổi một chuỗi Camel Case thành dạng viết thường, mỗi từ cách nhau bởi dấu cách.
// Dữ liệu kiểm tra:
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld', '-'));
// console.log(uncamelize('helloWorld', '_'));

// chưa làm đc

// 12. Viết một hàm JavaScript để nối một chuỗi cho trước n lần (mặc định là 1).
// Dữ liệu kiểm tra:
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!', 2));
// console.log(repeat('Ha!', 3));

// function repeat(str, n = 1) {
//     return str.repeat(n);
// }
// console.log(repeat('Ha!')); 
// console.log(repeat('Ha!', 2)); 
// console.log(repeat('Ha!', 3)); 
