import { createContext, useContext, useState } from 'react';

// Create an authentication context
export const AuthContext = createContext();

// Define an authentication provider component
export const AuthProvider = ({ children }) => {
  // State to manage user data
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = (userData) => {
    // set user data
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    // clear user data
    setUser(null);
  };

  // Provide the authentication context value to the children components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
