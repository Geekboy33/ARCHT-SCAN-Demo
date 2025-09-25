import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  loading = false,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background relative overflow-hidden";
  
  const variants = {
    default: "bg-archetyp-500 text-white hover:bg-archetyp-600 active:bg-archetyp-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    destructive: "bg-error-500 text-white hover:bg-error-600 active:bg-error-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    outline: "border-2 border-archetyp-500 bg-transparent text-archetyp-500 hover:bg-archetyp-500 hover:text-white active:bg-archetyp-600 hover:scale-105 active:scale-95",
    secondary: "bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    ghost: "hover:bg-gray-800 hover:text-white active:bg-gray-700 hover:scale-105 active:scale-95",
    link: "underline-offset-4 hover:underline text-archetyp-500 hover:text-archetyp-600 hover:scale-105",
    gradient: "bg-gradient-to-r from-archetyp-500 to-archetyp-600 text-white hover:from-archetyp-600 hover:to-archetyp-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
  };
  
  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4 py-1.5 text-sm",
    lg: "h-12 px-8 py-3 text-base",
    xl: "h-14 px-10 py-4 text-lg",
    icon: "h-11 w-11",
    "icon-sm": "h-9 w-9",
    "icon-lg": "h-12 w-12"
  };

  const Comp = asChild ? React.Fragment : "button";
  
  return (
    <Comp
      className={cn(
        baseClasses, 
        variants[variant], 
        sizes[size], 
        loading && "cursor-wait",
        className
      )}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={loading ? "opacity-0" : "opacity-100 transition-opacity"}>
        {props.children}
      </span>
    </Comp>
  );
});

Button.displayName = "Button";

export { Button };
