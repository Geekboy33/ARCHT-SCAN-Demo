import React from 'react';
import { cn } from '../../lib/utils';

const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm text-white shadow-lg hover:shadow-xl transition-all duration-300",
    elevated: "rounded-xl border border-gray-600 bg-gray-800/80 backdrop-blur-md text-white shadow-2xl hover:shadow-2xl hover:border-gray-500 transition-all duration-300",
    glass: "rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300",
    gradient: "rounded-xl border border-archetyp-500/30 bg-gradient-to-br from-archetyp-500/10 to-archetyp-600/10 backdrop-blur-sm text-white shadow-lg hover:shadow-xl hover:border-archetyp-400/50 transition-all duration-300",
    minimal: "rounded-lg border border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800/50 transition-all duration-200"
  };

  return (
    <div
      ref={ref}
      className={cn(variants[variant], className)}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizes = {
    sm: "text-lg font-semibold leading-none tracking-tight",
    default: "text-xl font-semibold leading-none tracking-tight",
    lg: "text-2xl font-semibold leading-none tracking-tight",
    xl: "text-3xl font-bold leading-none tracking-tight"
  };

  return (
    <h3
      ref={ref}
      className={cn(sizes[size], className)}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
