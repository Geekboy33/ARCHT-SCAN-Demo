import React from 'react';
import { Card, CardContent } from './Card';

const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  className = '',
  rounded = true 
}) => {
  return (
    <div
      className={`
        bg-gray-800 animate-pulse
        ${rounded ? 'rounded' : ''}
        ${className}
      `}
      style={{ width, height }}
    />
  );
};

const CardSkeleton = ({ className = "" }) => {
  return (
    <Card className={`bg-black border border-gray-800 ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SkeletonLoader width="40%" height="16px" />
            <SkeletonLoader width="32px" height="32px" className="rounded-lg" />
          </div>
          <SkeletonLoader width="60%" height="24px" />
          <SkeletonLoader width="30%" height="14px" />
        </div>
      </CardContent>
    </Card>
  );
};

const TableSkeleton = ({ rows = 5, columns = 4, className = "" }) => {
  return (
    <Card className={`bg-black border border-gray-800 ${className}`}>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                {Array.from({ length: columns }).map((_, index) => (
                  <th key={index} className="px-6 py-4 text-left">
                    <SkeletonLoader width="80%" height="14px" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-800">
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      <SkeletonLoader width="70%" height="14px" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const ChartSkeleton = ({ height = 300, className = "" }) => {
  return (
    <Card className={`bg-black border border-gray-800 ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <SkeletonLoader width="200px" height="20px" />
              <SkeletonLoader width="150px" height="14px" />
            </div>
            <div className="flex gap-2">
              <SkeletonLoader width="60px" height="32px" className="rounded" />
              <SkeletonLoader width="60px" height="32px" className="rounded" />
            </div>
          </div>
          <SkeletonLoader width="100%" height={`${height}px`} className="rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
};

const Spinner = ({ 
  size = 'md', 
  color = 'archetyp', 
  className = "" 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    archetyp: 'text-archetyp-500',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  return (
    <div className={`animate-spin ${className}`}>
      <svg
        className={`${sizes[size]} ${colors[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

const LoadingOverlay = ({ 
  isLoading, 
  children, 
  message = "Loading...",
  className = ""
}) => {
  if (!isLoading) return children;

  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex items-center gap-3">
          <Spinner size="md" />
          <span className="text-white font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  size = 'md',
  color = 'archetyp',
  showLabel = true,
  className = ""
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colors = {
    archetyp: 'bg-archetyp-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500'
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>{value.toLocaleString()}</span>
          <span>{percentage.toFixed(1)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-800 rounded-full ${sizes[size]}`}>
        <div
          className={`${sizes[size]} ${colors[color]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const PulseLoader = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-2 h-2 bg-archetyp-500 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-archetyp-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-archetyp-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
};

export { 
  SkeletonLoader, 
  CardSkeleton, 
  TableSkeleton, 
  ChartSkeleton, 
  Spinner, 
  LoadingOverlay, 
  ProgressBar,
  PulseLoader 
};


