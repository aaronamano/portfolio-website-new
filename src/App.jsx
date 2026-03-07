import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TravelMap from './components/TravelMap';
import Resume from './components/Resume';

const TABS = {
  ABOUTME: 'aboutme',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  TRAVEL: 'travel',
  RESUME: 'resume'
};

function App() {
  const [activeTab, setActiveTab] = useState(TABS.ABOUTME);

  const tabs = [
    { id: TABS.ABOUTME, label: 'me' },
    { id: TABS.EXPERIENCE, label: 'xp' },
    { id: TABS.PROJECTS, label: 'builds' },
    { id: TABS.TRAVEL, label: 'side quests' },
    { id: TABS.RESUME, label: 'resume' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case TABS.ABOUTME:
        return <AboutMe />;
      case TABS.EXPERIENCE:
        return <Experience />;
      case TABS.PROJECTS:
        return <Projects />;
      case TABS.TRAVEL:
        return <TravelMap />;
      case TABS.RESUME:
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <ThemeToggle />
      <main className="max-w-4xl mx-auto my-4 px-4">
        <div className="flex justify-center mb-4 gap-2 max-sm:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button text-center py-2 px-4 text-base font-bold text-secondary transition duration-300 ease-in-out hover:text-primary max-sm:py-2 max-sm:px-2 max-sm:text-xs ${
                activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'border-b-2 border-transparent'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-xl h-200 border border-custom">
          {renderContent()}
        </div>
      </main>
    </>
  );
}

export default App;
