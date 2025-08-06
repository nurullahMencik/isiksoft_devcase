import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  valueColorClass?: string; 
}

export default function StatsCard({ title, value, valueColorClass = 'text-gray-900' }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className={`text-2xl font-semibold mt-1 ${valueColorClass}`}>{value}</p>
    </div>
  );
}