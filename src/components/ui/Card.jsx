import React from 'react';
import { cn } from '../../lib/utils';

const Card = React.forwardRef(({ className, variant = "professional", elevation = "base", ...props }, ref) => {
  const variants = {
    professional: "card-professional hover-professional",
    elevated: "card-elevated hover-lift",
    glass: "card-glass hover-glow",
    minimal: "bg-black/60 border border-white/6 rounded-xl hover:border-white/10 transition-all duration-300",
    accent: "bg-gradient-accent border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300"
  };

  const elevations = {
    flat: "",
    base: "shadow-lg",
    elevated: "shadow-xl",
    floating: "shadow-2xl"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        variants[variant],
        elevations[elevation],
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, spacing = "default", ...props }, ref) => {
  const spacings = {
    tight: "p-4",
    default: "p-6",
    loose: "p-8"
  };

  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2", spacings[spacing], className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, size = "default", weight = "semibold", ...props }, ref) => {
  const sizes = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  };

  const weights = {
    medium: "font-medium",
    semibold: "font-semibold", 
    bold: "font-bold",
    black: "font-black"
  };

  return (
    <h3
      ref={ref}
      className={cn(
        "leading-tight tracking-tight text-white text-shadow-subtle",
        sizes[size],
        weights[weight],
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, size = "default", ...props }, ref) => {
  const sizes = {
    sm: "text-sm",
    default: "text-base",
    lg: "text-lg"
  };

  return (
    <p
      ref={ref}
      className={cn(
        "text-gray-400 leading-relaxed",
        sizes[size],
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, spacing = "default", ...props }, ref) => {
  const spacings = {
    none: "",
    tight: "p-4 pt-0",
    default: "p-6 pt-0", 
    loose: "p-8 pt-0"
  };

  return (
    <div 
      ref={ref} 
      className={cn(spacings[spacing], className)} 
      {...props} 
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, spacing = "default", ...props }, ref) => {
  const spacings = {
    tight: "p-4 pt-0",
    default: "p-6 pt-0",
    loose: "p-8 pt-0"
  };

  return (
    <div
      ref={ref}
      className={cn("flex items-center", spacings[spacing], className)}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

// Professional Card Variants
const MetricCard = React.forwardRef(({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  className,
  ...props 
}, ref) => {
  return (
    <Card ref={ref} variant="professional" className={cn("group", className)} {...props}>
      <CardContent spacing="loose">
        <div className="flex items-center justify-between mb-4">
          <div className="text-caption text-gray-400 group-hover:text-gray-300 transition-colors">
            {title}
          </div>
          {Icon && (
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
          )}
        </div>
        
        <div className="text-3xl font-bold text-white mb-2 number-professional group-hover:text-glow-professional transition-all duration-300">
          {value}
        </div>
        
        {subtitle && (
          <div className="text-caption text-gray-500 group-hover:text-gray-400 transition-colors">
            {subtitle}
          </div>
        )}
        
        {trend && (
          <div className={`text-sm font-medium mt-2 ${
            trend.direction === 'up' ? 'text-green-400' : 
            trend.direction === 'down' ? 'text-red-400' : 
            'text-gray-400'
          }`}>
            {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
});
MetricCard.displayName = "MetricCard";

const FeatureCard = React.forwardRef(({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  className,
  ...props 
}, ref) => {
  return (
    <Card ref={ref} variant="elevated" className={cn("group h-full", className)} {...props}>
      <CardContent spacing="loose" className="h-full flex flex-col">
        {Icon && (
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
            <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors">
          {description}
        </p>
        
        {features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
});
FeatureCard.displayName = "FeatureCard";

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  MetricCard,
  FeatureCard
};