//MAPS:

//1.
// let str=['html','css','js']
// console.log(str);
// let newStr=str.map((value)=>{
//     return value.toUpperCase();
// })
// console.log(newStr);



//2.
// let num=[2,3,4,1,5]
// console.log(num);
// let newNum=num.map((val)=>{
//     return val*val;
// })
// console.log(newNum);



//3.
// let obj=[
//         {
//             product:'hat',
//             price:8,
//         },
//         {
//             product:'mat',
//             price:12,
//         },
//         {
//             product:'cap',
//             price:6,
//         },
//         {
//             product:'set',
//             price:16,
//         },
//         {
//             product:'mouse',
//             price:7,
//         },
//         {
//             product:'book',
//             price:10,
//         },
//         {
//             product:'pen',
//             price:4,
//         }
    
    
//     ]
//     console.log(obj);

//     let newObj=obj.map((val)=>{
//         return val.product;
//     })
//     console.log(newObj);




//4.
// let cel=[20,34,44,26,48]
// console.log(cel);
// let fahrenhit=cel.map((val)=>{
//     return val*9/5+32;
// })
// console.log(fahrenhit);




//5.
let students=[
    {
                name:'ramu',
                age:22,
        
    },
    {
                name:'khaju',
               age:18
        
    },
    {
                name:'bheem',
                age:20
        
    },
     {
                name:'suresh',
               age:24
        
    },
    {
                name:'krishnu',
               age:25
        
     },
     {
                name:'dholak',
                age:20
        
     },
    {
                name:'kittu',
                age:15
        
    },
]
console.log(students);

let cur=2023;
let newStu=students.map((val)=>{

    let yoB=cur-val.age
    return {name:val.name,yoB};
})
console.log(newStu);
//----------------------------------------------------------------------------------



//FILTER:

//1.
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(arr);
// let newArr=arr.filter((value)=>{
//     return value%2==0;
// })
// console.log(newArr);


//2.
let countries=["dubai","england","qatar","india","pakistan","germany"]
// console.log(countries);
// let newCountries=countries.filter((value)=>{
//     return value.length<=6;
// })
// console.log(newCountries);


//3.
// let newFiltr=countries.filter((value)=>{
//     return value.startsWith('e');
// })
// console.log(newFiltr);


//4.
// let obj=[
//     {
//         product:'hat',
//         price:8,
//     },
//     {
//         product:'mat',
//         price:12,
//     },
//     {
//         product:'cap',
//         price:6,
//     },
//     {
//         product:'set',
//         price:16,
//     },
//     {
//         product:'mouse',
//         price:7,
//     },
//     {
//         product:'book',
//         price:10,
//     },
//     {
//         product:'pen',
//         price:4,
//     }


// ]
// console.log(obj);

// let newObj=obj.filter((value)=>{
//     return value.price<10;
// })
// console.log(newObj);



//5.
// let emp=[
//     {
//         name:'ramu',
//         sal:45000

//     },
//     {
//         name:'khaju',
//         sal:55000

//     },
//     {
//         name:'bheem',
//         sal:40000

//     },
//     {
//         name:'suresh',
//         sal:50000

//     },
//     {
//         name:'krishnu',
//         sal:30000

//     },
//     {
//         name:'dholak',
//         sal:64000

//     },
//     {
//         name:'kittu',
//         sal:54000

//     },
// ]
// console.log(emp);

// let newEmp=emp.filter((value)=>{
//     return value.sal>=50000
// })
// console.log(newEmp);



//-------------------------------------------------------------------------------------------------




//REDUCE:

//1.
// let num=[22,24,16,2,10]
// console.log(num);

// let newNum=num.reduce((prev,cur)=>{
//     return prev+cur;
// },0)
// console.log(newNum);




//2.
// let str=["hello","world","welcome","hi","come","new"]
// console.log(str);
// let newStr=str.reduce((p,c)=>{
//     return p+c;
// })
// console.log(newStr);


//3.
// let objR=[
//         {
//             product:'hat',
//             price:8,
//         },
//         {
//             product:'mat',
//             price:12,
//         },
//         {
//             product:'cap',
//             price:6,
//         },
//         {
//             product:'set',
//             price:16,
//         },
//         {
//             product:'mouse',
//             price:7,
//         },
//         {
//             product:'book',
//             price:10,
//         },
//         {
//             product:'pen',
//             price:4,
//         }]
// console.log(objR);

// let newObjR=objR.reduce((p,c)=>{
//     return p+c.price
// },0)
// console.log(newObjR);



//4.
// let tran=[
//     {
//         type:'debit',
//         amt:50,
//     },
//     {
//         type:'credit',
//         amt:30,
//     },
//     {
//         type:'debit',
//         amt:10,
//     },
//     {
//         type:'debit',
//         amt:5,
//     },
//     {
//         type:'credit',
//         amt:30,
//     },
//     {
//         type:'debit',
//         amt:20,
//     },
// ]
// console.log(tran);

// let newTran=tran.reduce((d,c)=>{
//     if(c.type=='credit'){
//         return d+c.amt;
//     }
//     else{
//         return d-c.amt
//     }
// },0)
// console.log(newTran);