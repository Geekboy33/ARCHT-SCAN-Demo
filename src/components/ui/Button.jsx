import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  elevation = "base",
  asChild = false, 
  loading = false,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100",
    secondary: "bg-transparent border-2 border-white text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white font-medium hover:bg-white/10 transition-all duration-200",
    outline: "bg-transparent border border-white/20 text-white hover:border-white hover:bg-white hover:text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
    gradient: "bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 shadow-lg hover:shadow-xl font-semibold transition-all duration-300",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300",
    accent: "bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/50 hover:text-cyan-300 shadow-lg transition-all duration-300",
    destructive: "bg-red-500/20 border border-red-400/30 text-red-400 hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-300 shadow-lg hover:shadow-xl transition-all duration-300"
  };
  
  const sizes = {
    sm: "h-8 sm:h-9 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg",
    default: "h-10 sm:h-11 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-xl",
    lg: "h-11 sm:h-12 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl",
    xl: "h-12 sm:h-14 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-2xl",
    icon: "h-10 w-10 sm:h-11 sm:w-11 rounded-xl",
    "icon-sm": "h-8 w-8 sm:h-9 sm:w-9 rounded-lg",
    "icon-lg": "h-11 w-11 sm:h-12 sm:w-12 rounded-xl"
  };

  const elevations = {
    flat: "",
    base: "shadow-lg",
    elevated: "shadow-xl",
    floating: "shadow-2xl"
  };

  const Comp = asChild ? 'div' : 'button';
  
  return (
    <Comp
      className={cn(
        baseClasses, 
        variants[variant], 
        sizes[size],
        elevations[elevation],
        loading && "cursor-wait",
        className
      )}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Ripple effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <span className={cn(
        "relative z-10 flex items-center justify-center",
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-200"
      )}>
        {props.children}
      </span>
    </Comp>
  );
});

Button.displayName = "Button";

// Professional Button Variants
const PrimaryButton = React.forwardRef((props, ref) => (
  <Button ref={ref} variant="primary" {...props} />
));
PrimaryButton.displayName = "PrimaryButton";

const SecondaryButton = React.forwardRef((props, ref) => (
  <Button ref={ref} variant="secondary" {...props} />
));
SecondaryButton.displayName = "SecondaryButton";

const AccentButton = React.forwardRef((props, ref) => (
  <Button ref={ref} variant="accent" {...props} />
));
AccentButton.displayName = "AccentButton";

export { 
  Button, 
  PrimaryButton, 
  SecondaryButton, 
  AccentButton 
};