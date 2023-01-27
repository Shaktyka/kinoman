module.exports = function(csvValue) {
    const result = [];
    
    const lines = 
        csvValue.split('\n')
        .filter((line) => line.length > 0);

    const header = lines[0].split(',');
    const content = lines.slice(1);

    for (let line of content) {
        const columns = line.split(',');

        const row = {};

        for (let i = 0; i < columns.length; i++) {
            const cellValue = columns[i];
            const columnName = header[i];
            row[columnName] = cellValue;
        }

        result.push(row);
    }

    return result;
};
