import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle, Bell } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent } from './Card';

// Context para notificaciones
const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

// Componente de notificación individual
const NotificationItem = ({ notification, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    if (notification.autoClose !== false) {
      const timer = setTimeout(() => {
        handleRemove();
      }, notification.duration || 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove(notification.id);
    }, 300);
  };

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getBorderColor = () => {
    switch (notification.type) {
      case 'success':
        return 'border-l-green-400';
      case 'error':
        return 'border-l-red-400';
      case 'warning':
        return 'border-l-yellow-400';
      case 'info':
      default:
        return 'border-l-blue-400';
    }
  };

  return (
    <div
      className={`
        transform transition-all duration-300 ease-in-out
        ${isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${isLeaving ? 'translate-x-full opacity-0' : ''}
      `}
    >
      <Card className={`bg-black/90 backdrop-blur-md border border-white/10 ${getBorderColor()} border-l-4 shadow-xl hover:shadow-2xl transition-all duration-200`}>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              {getIcon()}
            </div>
            <div className="flex-1 min-w-0">
              {notification.title && (
                <h4 className="text-sm font-semibold text-white mb-1">
                  {notification.title}
                </h4>
              )}
              <p className="text-sm text-gray-300">
                {notification.message}
              </p>
              {notification.action && (
                <div className="mt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={notification.action.onClick}
                    className="text-xs"
                  >
                    {notification.action.label}
                  </Button>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="flex-shrink-0 p-1 h-auto"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Componente de contenedor de notificaciones
export const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

// Componente de badge de notificaciones
export const NotificationBadge = ({ className = "" }) => {
  const { notifications, unreadCount } = useNotifications();

  if (unreadCount === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <Bell className="w-5 h-5 text-gray-400" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
        {unreadCount > 99 ? '99+' : unreadCount}
      </span>
    </div>
  );
};

// Provider principal
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      autoClose: true,
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);
    
    if (!notification.read) {
      setUnreadCount(prev => prev + 1);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
    setUnreadCount(0);
  }, []);

  const markAsRead = useCallback((id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, []);

  // Métodos de conveniencia
  const success = useCallback((message, options = {}) => {
    return addNotification({ type: 'success', message, ...options });
  }, [addNotification]);

  const error = useCallback((message, options = {}) => {
    return addNotification({ type: 'error', message, ...options });
  }, [addNotification]);

  const warning = useCallback((message, options = {}) => {
    return addNotification({ type: 'warning', message, ...options });
  }, [addNotification]);

  const info = useCallback((message, options = {}) => {
    return addNotification({ type: 'info', message, ...options });
  }, [addNotification]);

  const value = {
    notifications,
    unreadCount,
    addNotification,
    removeNotification,
    clearAll,
    markAsRead,
    success,
    error,
    warning,
    info,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

// Hook para usar notificaciones fácilmente
export const useNotificationActions = () => {
  const { success, error, warning, info } = useNotifications();

  return {
    showSuccess: success,
    showError: error,
    showWarning: warning,
    showInfo: info,
  };
};


