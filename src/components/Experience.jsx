import { experience } from '../data/experience';

export default function Experience() {
    return (
        <div className="experience-container overflow-y-auto max-h-[650px]">
            {experience.map((item, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-custom last:border-b-0">
                    <div className="flex justify-between items-start mb-3 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                            <h4 className="text-lg text-secondary font-medium">{item.organization}</h4>
                            {item.location && (
                                <p className="text-sm text-tertiary mt-1">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    {item.location}
                                </p>
                            )}
                        </div>
                        <div className="max-sm:self-end">
                            <span className="text-sm text-tertiary font-medium bg-tertiary px-3 py-1 rounded-full max-sm:text-xs max-sm:px-2 max-sm:py-1 max-sm:text-2xs tab-max-414:text-xs tab-max-414:px-2 tab-max-414:py-1 tab-max-414:whitespace-nowrap tab-max-375:text-2xs tab-max-375:px-1 tab-max-375:py-0">
                                {item.dateRange}
                            </span>
                        </div>
                    </div>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
