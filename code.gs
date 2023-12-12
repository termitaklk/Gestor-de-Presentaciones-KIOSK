function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();

  var result = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var rowData = {};
    for (var j = 0; j < row.length; j++) {
      rowData[data[0][j]] = row[j];
    }
    result.push(rowData);
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}