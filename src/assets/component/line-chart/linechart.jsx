import { LineChart, Line,XAxis,YAxis } from 'recharts';

function Linechart() {


    const data = [
        { id: 1, name: "Alice", mathMarks: 85, banglaMarks: 80 },
        { id: 2, name: "Bob", mathMarks: 78, banglaMarks: 75 },
        { id: 3, name: "Charlie", mathMarks: 92, banglaMarks: 89 },
        { id: 4, name: "David", mathMarks: 67, banglaMarks: 70 },
        { id: 5, name: "Emma", mathMarks: 74, banglaMarks: 76 },
        { id: 6, name: "Frank", mathMarks: 88, banglaMarks: 85 },
        { id: 7, name: "Grace", mathMarks: 91, banglaMarks: 90 },
        { id: 8, name: "Henry", mathMarks: 76, banglaMarks: 73 },
        { id: 9, name: "Ivy", mathMarks: 83, banglaMarks: 79 },
        { id: 10, name: "Jack", mathMarks: 80, banglaMarks: 78 }
      ];
      



    return (
        <div>
<LineChart className='r' width={400} height={400} data={data}>   
<XAxis dataKey="name " />
            <YAxis dataKey={"mathMarks"  } />
<Line   dataKey="banglaMarks" stroke="green"  />
<Line   dataKey="mathMarks" stroke="red"  />

</LineChart>
        </div>
    )
}

export default Linechart
