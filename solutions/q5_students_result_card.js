// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var students=[
{name: 'Aish',subjects: [{subject:'Grammar',marks:60},{subject:'Accounts',marks:85}]},
{name: 'Shaun',subjects: [{subject:'Grammar',marks:70},{subject:'Accounts',marks:65}]},
{name: 'Sandeep',subjects: [{subject:'Grammar',marks:80},{subject:'Accounts',marks:55}]},
{name: 'Pujitha',subjects: [{subject:'Grammar',marks:90},{subject:'Accounts',marks:75}]},
{name: 'Kaustav',subjects: [{subject:'Grammar',marks:40},{subject:'Accounts',marks:85}]},
{name: 'Trishala',subjects: [{subject:'Grammar',marks:30},{subject:'Accounts',marks:95}]},
{name: 'Adhiraj',subjects: [{subject:'Grammar',marks:50},{subject:'Accounts',marks:35}]},
{name: 'Pragati',subjects: [{subject:'Grammar',marks:68},{subject:'Accounts',marks:45}]},
{name: 'Vaisnavi',subjects: [{subject:'Grammar',marks:66},{subject:'Accounts',marks:55}]},
{name: 'Aparna',subjects: [{subject:'Grammar',marks:75},{subject:'Accounts',marks:35}]},
{name: 'Niveditha',subjects: [{subject:'Grammar',marks:85},{subject:'Physics',marks:68}]},
{name: 'Herra',subjects: [{subject:'Grammar',marks:95},{subject:'Physics',marks:68}]},
{name: 'Shreya',subjects: [{subject:'Grammar',marks:45},{subject:'Physics',marks:72}]},
{name: 'Jaya',subjects: [{subject:'Grammar',marks:60},{subject:'Physics',marks:87}]},
{name: 'Ankita',subjects: [{subject:'Grammar',marks:20},{subject:'Physics',marks:57}]},
{name: 'Asya',subjects: [{subject:'Grammar',marks:35},{subject:'Physics',marks:96}]},
{name: 'Asma',subjects: [{subject:'Grammar',marks:45},{subject:'Physics',marks:84}]},
{name: 'Deepak',subjects: [{subject:'Grammar',marks:68},{subject:'Physics',marks:54}]},
{name: 'Ankit',subjects: [{subject:'Grammar',marks:55},{subject:'Physics',marks:98}]},
{name: 'Manish',subjects: [{subject:'Grammar',marks:70},{subject:'Physics',marks:25}]},
{name: 'Satish',subjects: [{subject:'Grammar',marks:58},{subject:'Physics',marks:78}]},
];


// for (const item of students)
// {
//     sum =(item.subjects[0].marks+item.subjects[1].marks)/2;
//     console.log(item.name+":"+sum);
// }

let res_card = students.reduce((res,row) =>
  {
      let percent = row.subjects.reduce(() => {
      return (row.subjects[0].marks + row.subjects[1].marks)/row.subjects.length; },{})
      console.log(row.name + "," + percent);
  })

//   let result_card=data.reduce((res,row)=>{
//     percent= ((row.subjects[0].marks + row.subjects[1].marks)/200)*100;
//     res.push([row.name,percent]);
//     return res;
//     },[]);
// console.log(result_card);





