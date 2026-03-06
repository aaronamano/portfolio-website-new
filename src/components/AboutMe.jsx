import { socials } from '../data/socials';

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full gap-y-8">
                <div>
                    <h1 className="text-3xl text-primary text-center">hi i'm aaron</h1>
                    <p className="text-center text-secondary">cs @ umich dearborn</p>
                </div>
                <img
                    src="public/assets/profile/pfp.png"
                    alt="my profile picture"
                    className="w-64 h-64 object-cover rounded-full block mx-auto shadow-md"
                />
                <div className="text-center">
                    <div className="gap-4 mb-6">
                        <p className="text-secondary">email: amanoac [at] umich [dot] edu</p>
                        <p className="text-secondary">phone: +1 (586) 522-7807</p>
                    </div>
                    <div className="flex justify-center gap-6 aboutme-icons">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} className="mr-4">
                                <i 
                                    className={`${social.icon} text-secondary text-3xl transition duration-300 ease-in-out hover-text-tertiary`} 
                                    aria-hidden="true"
                                ></i>
                            </a>
                        ))}
                    </div>
                </div>
                <footer className="text-center text-tertiary text-sm italic">
                    "Choose your battles wisely. 
                    After all, life isn't measured by how many times you stood up to fight. 
                    It's not winning battles that makes you happy, but it's how many times you turned away and chose to look into a better direction." 
                    - C. Joybell C.
                </footer>
            </div>
        </div>
    );
}
