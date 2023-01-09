import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, Treemap, XAxis, YAxis } from 'recharts';
// import banner from './src/photos/quiz-banner.webp';
import { useLoaderData } from 'react-router-dom';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


  

const Statistics = () => {
    const data = useLoaderData();
    const quizData = data.data;
    // console.log(data.data);

    // let language = [];
    // let total = [];
    // for (const quiz of quizData) {
    //     total.push(parseInt(quiz.total));
    //     language.push(quiz.name);
    // }
    // console.log(total);
    // console.log(language);




    return (
        <div className='grid grid-cols-2  bg-slate-600 gap-4 '>

            <div className='bg-gray-900 hover:bg-zinc-900 rounded-3xl'>
                <LineChart
                    width={500}
                    height={300}
                    data={quizData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className='bg-gray-700 hover:bg-zinc-700 rounded-3xl'>
                <BarChart
                    width={500}
                    height={300}
                    data={quizData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" stackId="a" fill="#8884d8" />
                    <Bar dataKey="total" stackId="a" fill="#82ca9d" />
                    {/* <Bar dataKey="uv" fill="#ffc658" /> */}
                </BarChart>
            </div>
            <div className='bg-gray-700 hover:bg-gray-900 rounded-3xl'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={quizData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="total"
                        dataKey2="name"
                    >
                        {quizData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='bg-gray-900 hover:bg-zinc-900 flex items-center justify-center rounded-3xl'>
            <Treemap width={400} height={200} data={quizData} dataKey="total" ratio={4 / 3} stroke="#fff" fill="#8884d8" />

            </div>
        </div>
    );
};

export default Statistics;