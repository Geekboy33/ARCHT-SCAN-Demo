import React, { useState, useMemo } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  ReferenceLine, ReferenceArea
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Button } from './Button';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

const ChartCard = ({ 
  title, 
  subtitle,
  children, 
  className = "",
  actions = null,
  loading = false
}) => {
  if (loading) {
    return (
      <Card className={`bg-black border border-gray-800 ${className}`}>
        <CardHeader>
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-32"></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-64 bg-gray-700 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-black border border-gray-800 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {subtitle && (
              <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

const AdvancedLineChart = ({ 
  data = [], 
  dataKey = 'value',
  xAxisKey = 'name',
  title = "Line Chart",
  subtitle,
  height = 300,
  showGrid = true,
  showDots = true,
  strokeWidth = 2,
  colors = ['#06b6d4'],
  showLegend = true,
  loading = false,
  className = ""
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ChartCard title={title} subtitle={subtitle} loading={loading} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#374151" />}
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend />}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={colors[0]}
            strokeWidth={strokeWidth}
            dot={showDots ? { fill: colors[0], strokeWidth: 2, r: 4 } : false}
            activeDot={{ r: 6, stroke: colors[0], strokeWidth: 2 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const AdvancedAreaChart = ({ 
  data = [], 
  dataKey = 'value',
  xAxisKey = 'name',
  title = "Area Chart",
  subtitle,
  height = 300,
  colors = ['#06b6d4'],
  showLegend = true,
  loading = false,
  className = ""
}) => {
  return (
    <ChartCard title={title} subtitle={subtitle} loading={loading} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors[0]} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={colors[0]} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          {showLegend && <Legend />}
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={colors[0]}
            fillOpacity={1}
            fill="url(#colorGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const AdvancedBarChart = ({ 
  data = [], 
  dataKey = 'value',
  xAxisKey = 'name',
  title = "Bar Chart",
  subtitle,
  height = 300,
  colors = ['#06b6d4'],
  showLegend = true,
  loading = false,
  className = ""
}) => {
  return (
    <ChartCard title={title} subtitle={subtitle} loading={loading} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          {showLegend && <Legend />}
          <Bar 
            dataKey={dataKey} 
            fill={colors[0]}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const AdvancedPieChart = ({ 
  data = [], 
  dataKey = 'value',
  nameKey = 'name',
  title = "Pie Chart",
  subtitle,
  height = 300,
  colors = ['#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  showLegend = true,
  loading = false,
  className = ""
}) => {
  const COLORS = colors;

  return (
    <ChartCard title={title} subtitle={subtitle} loading={loading} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          {showLegend && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const ChartSelector = ({ charts = [], activeChart, onChartChange }) => {
  const chartIcons = {
    line: <TrendingUp className="w-4 h-4" />,
    area: <Activity className="w-4 h-4" />,
    bar: <BarChart3 className="w-4 h-4" />,
    pie: <PieChartIcon className="w-4 h-4" />
  };

  return (
    <div className="flex gap-2">
      {charts.map((chart) => (
        <Button
          key={chart.type}
          variant={activeChart === chart.type ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChartChange(chart.type)}
          className="flex items-center gap-2"
        >
          {chartIcons[chart.type]}
          {chart.label}
        </Button>
      ))}
    </div>
  );
};

export { 
  ChartCard, 
  AdvancedLineChart, 
  AdvancedAreaChart, 
  AdvancedBarChart, 
  AdvancedPieChart,
  ChartSelector 
};


