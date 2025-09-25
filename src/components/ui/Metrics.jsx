import React from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent } from './Card';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'percentage', 
  icon: Icon, 
  trend = 'neutral',
  subtitle,
  className = "",
  loading = false
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'positive': return 'text-success-400';
      case 'negative': return 'text-error-400';
      case 'neutral': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'positive': return <TrendingUp className="w-4 h-4" />;
      case 'negative': return <TrendingDown className="w-4 h-4" />;
      default: return null;
    }
  };

  const getChangeIcon = () => {
    if (change > 0) return <ArrowUpRight className="w-3 h-3" />;
    if (change < 0) return <ArrowDownRight className="w-3 h-3" />;
    return null;
  };

  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (val >= 1000000000) return `${(val / 1000000000).toFixed(1)}B`;
      if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
      return val.toLocaleString();
    }
    return val;
  };

  const formatChange = (val) => {
    if (changeType === 'percentage') {
      return `${val > 0 ? '+' : ''}${val.toFixed(1)}%`;
    }
    return `${val > 0 ? '+' : ''}${formatValue(val)}`;
  };

  if (loading) {
    return (
      <Card className={`bg-black border border-gray-800 ${className}`}>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 bg-gray-700 rounded w-24"></div>
              <div className="h-8 w-8 bg-gray-700 rounded"></div>
            </div>
            <div className="h-8 bg-gray-700 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300 group ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
            {title}
          </h3>
          {Icon && (
            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
              <Icon className="w-5 h-5 text-archetyp-400" />
            </div>
          )}
        </div>
        
        <div className="mb-2">
          <div className="text-2xl font-bold text-white group-hover:text-archetyp-300 transition-colors">
            {formatValue(value)}
          </div>
          {subtitle && (
            <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
          )}
        </div>
        
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
            {getChangeIcon()}
            <span>{formatChange(change)}</span>
            <span className="text-gray-500">vs last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const MetricGrid = ({ metrics = [], columns = 4, className = "" }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

const KPIWidget = ({ 
  title, 
  current, 
  target, 
  unit = '', 
  icon: Icon,
  className = ""
}) => {
  const percentage = target > 0 ? (current / target) * 100 : 0;
  const isOnTrack = percentage >= 80;
  const isExceeding = percentage >= 100;

  return (
    <Card className={`bg-black border border-gray-800 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          {Icon && (
            <div className="p-2 bg-gray-800 rounded-lg">
              <Icon className="w-5 h-5 text-archetyp-400" />
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-white mb-1">
            {current.toLocaleString()} {unit}
          </div>
          <div className="text-sm text-gray-500">
            Target: {target.toLocaleString()} {unit}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className={`font-medium ${
              isExceeding ? 'text-success-400' : 
              isOnTrack ? 'text-warning-400' : 
              'text-error-400'
            }`}>
              {percentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                isExceeding ? 'bg-success-500' : 
                isOnTrack ? 'bg-warning-500' : 
                'bg-error-500'
              }`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { MetricCard, MetricGrid, KPIWidget };


