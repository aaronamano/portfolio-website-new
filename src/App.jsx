import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

const TABS = {
  ABOUTME: 'aboutme',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects'
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.ABOUTME);

  const tabs = [
    { id: TABS.ABOUTME, label: 'About Me' },
    { id: TABS.EXPERIENCE, label: 'Experience' },
    { id: TABS.PROJECTS, label: 'Projects' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case TABS.ABOUTME:
        return <AboutMe />;
      case TABS.EXPERIENCE:
        return <Experience />;
      case TABS.PROJECTS:
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <ThemeToggle />
      <main className="max-w-4xl mx-auto my-8 px-4">
        <div className="flex justify-center mb-8 bg-secondary rounded-lg shadow-lg overflow-hidden border border-custom max-sm:gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button flex-grow text-center py-5 px-8 text-lg font-bold text-secondary transition duration-300 ease-in-out hover-bg-secondary hover:text-primary max-sm:py-4 max-sm:px-2 max-sm:text-sm max-sm:py-3 max-sm:px-1 max-sm:text-xs tab-max-414:py-4 tab-max-414:px-2 tab-max-414:text-sm tab-max-375:py-3 tab-max-375:px-1 tab-max-375:text-xs ${
                activeTab === tab.id ? 'bg-tertiary text-primary shadow-inner' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-secondary p-8 rounded-lg shadow-xl h-[700px] border border-custom">
          {renderContent()}
        </div>
      </main>
    </>
  );
}

export default App;
