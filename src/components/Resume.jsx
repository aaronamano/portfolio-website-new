const Resume = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex">
        <div className="w-full h-full flex flex-col">
          <div className="bg-gray-300 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-white">
            <iframe
              src="/assets/resume/Aaron_Amano_resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
