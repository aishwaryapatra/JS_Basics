/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (x) => {
     // Write your code here
     // let str = null;
     //  if(isNaN(rows))
     //  str = '';
     //  else {
          let str="";
          let res="";
          for (let i=0;i<x-1;i++){
               str=str+" ";
          }
          for(let i=0;i<x;i++){
               str = str.substring(1);
               str = str + " *" ;
               res=res + (" " + str + "  \n");
          }
          return res;
     // }
     // return str;
};
// console.log('      *  \n     * *  \n    * * *  \n   * * * *  \n  * * * * *  \n * * * * * *  \n');

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
module.exports = buildPyramid;
