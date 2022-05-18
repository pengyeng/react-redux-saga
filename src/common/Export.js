import { parse }from 'json2csv';


const exportBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  
    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
};

function exportCSV(columns,data){
    
    const csv = parse(data, columns);
    
    const blob = new Blob([csv], {
      type: 'text/csv',
    });
  
    exportBlob(blob, 'demo.csv');

}

export default exportCSV;