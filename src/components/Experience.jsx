import { experience } from '../data/experience';

export default function Experience() {
    return (
        <div className="experience-container overflow-y-auto max-h-180">
            {experience.map((item, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-custom last:border-b-0">
                    <div className="flex justify-between items-start mb-3 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                            <h4 className="text-lg text-secondary font-medium">{item.organization}</h4>
                        </div>
                        <div className="flex flex-col items-end gap-1 max-sm:flex-row max-sm:items-start max-sm:gap-6">
                            <span className="text-sm text-tertiary whitespace-nowrap">
                                {item.dateRange}
                            </span>
                            {item.location && (
                                <span className="text-sm text-tertiary whitespace-nowrap">
                                    {item.location}
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
