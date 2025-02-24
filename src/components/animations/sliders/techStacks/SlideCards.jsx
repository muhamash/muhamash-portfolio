import { faCuttlefish, faGitAlt, faGithub, faGitlab, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SlideCards({ text }) {
  const icons = {
    react: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-400" />,
    nodejs: <FontAwesomeIcon icon={faNodeJs} className="text-4xl text-green-500" />,
    // mongo: <FontAwesomeIcon icon={faDatabase} className="text-4xl text-green-800" />,
    nextjs: <FontAwesomeIcon icon={faReact} className="text-4xl text-gray-800" />,
    typescript: <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-blue-600" />,
    javascript: <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-yellow-500" />,
    python: <FontAwesomeIcon icon={faPython} className="text-4xl text-blue-500" />,
    c: <FontAwesomeIcon icon={faCuttlefish} className="text-4xl text-green-700" />,
    nestjs: <FontAwesomeIcon icon={faNodeJs} className="text-4xl text-red-500" />,
    expressjs: <FontAwesomeIcon icon={faNodeJs} className="text-4xl text-gray-600" />,
    electron: <FontAwesomeIcon icon={faServer} className="text-4xl text-gray-700" />,
    redux: <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-purple-600" />,
    tailwind: <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-teal-500" />,
    mui: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-500" />,
    // postgresql: <FontAwesomeIcon icon={faDatabase} className="text-4xl text-blue-500" />,
    // mysql: <FontAwesomeIcon icon={faDatabase} className="text-4xl text-blue-600" />,
    // prisma: <FontAwesomeIcon icon={faDatabase} className="text-4xl text-green-600" />,
    graphql: <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-pink-600" />,
    git: <FontAwesomeIcon icon={faGitAlt} className="text-4xl text-orange-600" />,
    github: <FontAwesomeIcon icon={faGithub} className="text-4xl text-black" />,
    gitlab: <FontAwesomeIcon icon={faGitlab} className="text-4xl text-orange-700" />,
    postman: <FontAwesomeIcon icon={faGitlab} className="text-4xl text-orange-400" />,
    rest: <FontAwesomeIcon icon={faServer} className="text-4xl text-green-400" />,
    figma: <FontAwesomeIcon icon={faReact} className="text-4xl text-purple-600" />,
    vscode: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-600" />,
    html: <FontAwesomeIcon icon={faReact} className="text-4xl text-red-600" />,
    css: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-600" />,
    nginx: <FontAwesomeIcon icon={faServer} className="text-4xl text-gray-600" />,
    vercel: <FontAwesomeIcon icon={faServer} className="text-4xl text-black" />,
    jira: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-700" />,
    notion: <FontAwesomeIcon icon={faReact} className="text-4xl text-black" />,
    zsh: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-600" />,
    terminal: <FontAwesomeIcon icon={faReact} className="text-4xl text-green-600" />,
    axios: <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-700" />
  };

  const Icon = icons[text.toLowerCase()];

    return (
        <div className="flex items-center justify-center rounded-lg p-[2px] bg-gradient-to-r from-sky-600 via-green-600 via-yellow-500 to-violet-600">
            <div className="p-8 rounded-lg bg-slate-800 bg-opacity-80 backdrop-blur-sm w-64 h-[100px] flex items-center justify-center gap-10">
                { Icon ? Icon : <span className="text-white text-xl">Icon Not Found</span> }
                <p className="text-white text-lg">{ text }</p>
            </div>
        </div>
    );
}