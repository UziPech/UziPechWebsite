import React from 'react';
import { HomeView } from './infrastructure/ui/HomeView';

const App: React.FC = () => {
  return (
    <div className="bg-forest-900 min-h-screen text-mist-50 font-sans selection:bg-forest-700 selection:text-white">
      <HomeView />
    </div>
  );
};

export default App;