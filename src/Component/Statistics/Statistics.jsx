import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Statistics = () => {

  const assignmentMarks = [
    {id:1, name: "A1", marks: 60,uv: 60},
    {id:2, name: "A2", marks: 60, uv: 60},
    {id:3, name: "A3", marks: 60,uv: 60},
    {id:4, name: "A4", marks: 58, uv: 58},
    {id:5, name: "A5", marks: 59,uv: 59},
    {id:6, name: "A6", marks: 60,uv: 60},
    {id:7, name: "A7", marks: 60,uv:60}
  ]
  return (
    <div className='flex justify-center mt-32'>
      <ComposedChart 
      width={700}
      height={450}
      data={assignmentMarks}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="marks" barSize={25} fill="#413ea0" ></Bar>
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;