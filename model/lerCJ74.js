const exceljs = require('exceljs');
const moment = require('moment');

const lerArquivo = async(filePath)=>{
  const myExcelFile = new exceljs.Workbook();
  await myExcelFile.xlsx.readFile(filePath);
  const worksheet = await myExcelFile.getWorksheet(1)
  return worksheet
}

plan = ()=>{
    lerArquivo('./templates/TODO_AIC.xlsx').then( w => {
        console.log(w.getRow(1).values)
    })
} 
    
module.exports = plan
// minhaPlan = lerArquivo().then( w => {
// //console.table(w.name)
//     w.eachRow(row =>{
//     console.log(row.values)
//   })
// //   //console.log(w.getCell('C1').value) 
//  }) 
    


  // worksheet.eachRow((row,rowNumber)=>{
  //   console.log(rowNumber)
  // })

//})

      // worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
      //     console.log("Current Row:" + rowNumber);
      //     //Second iterator for cells in row
      //     row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
      //     //print row number, column number and cell value at[row][col]
      //     console.log("Cell Value=" + cell.value + "for cell [" + rowNumber + "]" + "[" + colNumber + "]");
      //     /*
      //         write code
      //     */})
//})
//})