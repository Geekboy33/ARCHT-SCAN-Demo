import React, { useState, useEffect, createContext, useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      duration: 5000,
      ...notification
    };
    
    setNotifications(prev => [...prev, newNotification]);
    
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }
    
    return id;
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const NotificationContainer = () => {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
};

const NotificationItem = ({ 
  id, 
  type = 'info', 
  title, 
  message, 
  duration = 5000,
  actions = [],
  onClose = null
}) => {
  const { removeNotification } = useNotifications();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      removeNotification(id);
      onClose && onClose();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-success-400" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-error-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-warning-400" />;
      case 'info': return <Info className="w-5 h-5 text-info-400" />;
      default: return <Info className="w-5 h-5 text-gray-400" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success': return 'border-success-500';
      case 'error': return 'border-error-500';
      case 'warning': return 'border-warning-500';
      case 'info': return 'border-info-500';
      default: return 'border-gray-600';
    }
  };

  return (
    <div
      className={`
        bg-black border-l-4 ${getBorderColor()} border border-gray-800 rounded-lg shadow-lg
        max-w-sm w-full p-4 transform transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-sm font-semibold text-white mb-1">
              {title}
            </h4>
          )}
          {message && (
            <p className="text-sm text-gray-300">
              {message}
            </p>
          )}
          
          {actions.length > 0 && (
            <div className="mt-3 flex gap-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.onClick}
                  className="text-xs"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex-shrink-0 ml-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const NotificationTrigger = ({ 
  type = 'info', 
  title, 
  message, 
  duration = 5000,
  actions = [],
  children,
  className = ""
}) => {
  const { addNotification } = useNotifications();

  const handleClick = () => {
    addNotification({
      type,
      title,
      message,
      duration,
      actions
    });
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export { NotificationProvider, NotificationTrigger };


