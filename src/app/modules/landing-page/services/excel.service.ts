import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string, sheetName: string, worksheetOptions?: object, columnOptions?: any, rowOptions?: any): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json, worksheetOptions);
    if (columnOptions) {
		worksheet['!cols'] = columnOptions;
    }
    if (rowOptions) {
		worksheet['!row'] = rowOptions;
    }
    console.log('worksheet',worksheet);
    const sheet = { Sheets: {}, SheetNames: [sheetName] };
    sheet.Sheets[sheetName] = worksheet;
    const workbook: XLSX.WorkBook = sheet;
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}