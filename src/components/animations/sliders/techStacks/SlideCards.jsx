import AILogo from '@/components/svg/AILogo';
import AwsLogo from '@/components/svg/AwsLogo';
import BashLogo from '@/components/svg/BashLogo';
import CLogo from '@/components/svg/CLogo';
import Cloud from '@/components/svg/CloudComI';
import CssLogo from '@/components/svg/CssLogo';
import DockerLogo from '@/components/svg/DockerLogo';
import ExpressjsLogo from '@/components/svg/ExpressjsLogo';
import FigmaLogo from '@/components/svg/FigmaLogo';
import FireBaseLogo from '@/components/svg/FireBaseLogo';
import GithubLogo from '@/components/svg/GithubLogo';
import GitlabLogo from '@/components/svg/GitlabLogo';
import GitLogo from '@/components/svg/GitLogo';
import GraphQlLogo from '@/components/svg/GraphQlLogo';
import HtmlLogo from '@/components/svg/HtmlLogo';
import JIraLogo from '@/components/svg/JIraLogo';
import JsLogo from '@/components/svg/JsLogo';
import LinuxLOgo from '@/components/svg/LinuxLOgo';
import MongoIcon from '@/components/svg/MongoIcon';
import MuiLogo from '@/components/svg/MuiLogo';
import MySqlLogo from '@/components/svg/MySqlLogo';
import NestLogo from '@/components/svg/NestLogo';
import NextAuthLogo from '@/components/svg/NextAuthLogo';
import NextjsIcon from '@/components/svg/NextjsIcon';
import NgnixLogo from '@/components/svg/NgnixLogo';
import NodeIcon from '@/components/svg/NodeIcon';
import PostgresLogo from '@/components/svg/PostgresLogo';
import PrismaLogo from '@/components/svg/PrismaLogo';
import PythonLogo from '@/components/svg/PythonLogo';
import ReactIcon from '@/components/svg/ReactIcon';
import ReduxLogo from '@/components/svg/ReduxLogo';
import ShadcnLogo from '@/components/svg/ShadcnLogo';
import TailwindCssLogo from '@/components/svg/TailwindCssLogo';
import TerminalLogo from '@/components/svg/TerminalLogo';
import TypescriptIcon from '@/components/svg/TypescriptIcon';
import VercelLogo from '@/components/svg/VercelLogo';
import VsCOde from '@/components/svg/VsCOde';

export default function SlideCards({ text }) {
  const icons = {
    react: <ReactIcon/>,
    nodejs: <NodeIcon/>,
    mongo: <MongoIcon/>,
    nextjs: <NextjsIcon/>,
    typescript: <TypescriptIcon/>,
    javascript: <JsLogo/>,
    python: <PythonLogo/>,
    c:<CLogo/>,
    nestjs: <NestLogo/>,
    expressjs: <ExpressjsLogo/>,
    redux: <ReduxLogo/>,
    tailwind:<TailwindCssLogo/>,
    mui:<MuiLogo/>,
    postgresql: <PostgresLogo/>,
    mysql:<MySqlLogo/>,
    prisma:<PrismaLogo/>,
    graphql:<GraphQlLogo/>,
    git: <GitLogo/>,
    github: <GithubLogo/>,
    gitlab: <GitlabLogo/>,
    figma:<FigmaLogo/>,
    vscode:<VsCOde/>,
    html:<HtmlLogo/>,
    css:<CssLogo/>,
    nginx: <NgnixLogo/>,
    vercel:<VercelLogo/>,
    jira:<JIraLogo/>,
    bash: <BashLogo/>,
    terminal: <TerminalLogo />,
    shadcn: <ShadcnLogo />,
    docker: <DockerLogo />,
    linux: <LinuxLOgo />,
    openai: <AILogo />,
    cloudComputing: <Cloud />,
    firebase: <FireBaseLogo />,
    aws: <AwsLogo />,
    nextAuth: <NextAuthLogo />,
  };

  const Icon = icons[text.toLowerCase()];

    return (
        <div className="flex items-center justify-center rounded-lg p-[2px] bg-gradient-to-r from-sky-500 via-green-600 via-yellow-400 to-violet-600">
            <div className="p-8 rounded-lg bg-slate-800 bg-opacity-80 backdrop-blur-sm w-64 h-[100px] flex items-center justify-center gap-10">
                { Icon ? Icon : <span className="text-white text-xl">Icon Not Found</span> }
                <p className="text-white text-lg">{ text }</p>
            </div>
        </div>
    );
}