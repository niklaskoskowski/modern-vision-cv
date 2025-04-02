
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center bento-box max-w-md">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Diese Seite wurde nicht gefunden.</p>
        <Link 
          to="/" 
          className="bg-primary text-white rounded-full px-6 py-3 inline-flex items-center font-medium hover:bg-primary/90 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
