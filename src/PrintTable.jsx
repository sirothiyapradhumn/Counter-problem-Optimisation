import React, {memo} from 'react';
const generateTable = (number) => {
    const arr = []
    let startTime = performance.now();
    while (performance.now() - startTime < 800) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
    for (let i = 1; i <= 10; i++) {
        arr.push(<div>{number * i}</div>)
    }
    return arr
}
 
const PrintTable = memo((props) => {
    const {num} = props
    const table = generateTable(num);
    console.log(table)
    return <>
        {table}
    </>
});
 
export default PrintTable;