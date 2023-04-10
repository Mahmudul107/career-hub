import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignmentsMarks = [
    { assignment: 1, marks: 47 },
    { assignment: 2, marks: 49 },
    { assignment: 3, marks: 57 },
    { assignment: 4, marks: 57 },
    { assignment: 5, marks: 50 },
    { assignment: 6, marks: 60 },
    { assignment: 7, marks: 60 },
    { assignment: 8, marks: 60 },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl text-purple-600 bg-slate-200 p-8 mb-6 font-mono font-bold mx-12">
        The synchronized AreaCharts Shows my Assignment marks.
      </h1>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={assignmentsMarks}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="red" fill="blue" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
