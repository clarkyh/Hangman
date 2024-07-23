import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Sorry, something went wrong.</h1>;
  }

  return (
    <React.ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => {
        setHasError(true);
        console.error("Uncaught error:", error);
        return <h1>Sorry, something went wrong.</h1>;
      }}
    >
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBoundary;