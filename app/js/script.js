console.log('Hello');
console.log('aaaaa')
function getValues(spreadsheetId, range, callback) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        const result = response.result;
        const numRows = result.values ? result.values.length : 0;
        console.log(`${numRows} rows retrieved.`);
        if (callback) callback(response);
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
  }

  const temp = getValues('14VudoRo4EnCsGff3zt1Wj07EviLKQpvV0VUnBtN6h2E', 'B4')

  //console.log(temp)
  console.log('aaaaa')