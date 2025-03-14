"use client";

import { cn } from "@/utils/helper/helper";

const ReadmeOutput = ( {
  title,
  description,
  badges,
  features,
  installation,
  usage,
  envVariables,
  apiEndpoints,
  externalLibraries,
  externalSources,
  contributing,
  license,
} ) =>
{
  return (
    <div className={ cn( "bg-gray-900 text-gray-100 md:p-6 p-3 rounded-lg shadow-lg font-mono text-sm leading-relaxed" ) }>
      { title && <h1 className="text-2xl font-bold text-blue-400 mb-4">{ title }</h1> }

      { badges?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          { badges.map( ( badge, index ) => (
            <img key={ index } src={ badge } alt="Badge" className="h-6" />
          ) ) }
        </div>
      ) }

      { description && <p className="mb-4 text-gray-300">{ description }</p> }

      { features?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-green-400">🚀 Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            { features.map( ( feature, index ) => (
              <li key={ index }>{ feature }</li>
            ) ) }
          </ul>
        </div>
      ) }

      { installation && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-yellow-400">🛠 Installation</h2>
          <code className="block bg-gray-800 p-2 rounded">{ installation }</code>
        </div>
      ) }

      { usage && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-purple-400">🚀 Usage</h2>
          <code className="block bg-gray-800 p-2 rounded">{ usage }</code>
        </div>
      ) }

      { envVariables?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-orange-400">🔧 Environment Variables</h2>
          <div className="bg-gray-800 p-2 rounded text-sm overflow-x-auto">
            <pre className="whitespace-pre-wrap md:whitespace-pre">{ envVariables.join( "\n" ) }</pre>
          </div>
        </div>
      ) }


      { apiEndpoints?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-blue-400">📡 API Endpoints</h2>
          <ul className="text-gray-300">
            { apiEndpoints.map( ( api, index ) => (
              <li key={ index }>
                <strong className="text-yellow-400">{ api.method }</strong> <code>{ api.endpoint }</code> - { api.description }
              </li>
            ) ) }
          </ul>
        </div>
      ) }

      { externalLibraries?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-pink-400">📦 External Libraries</h2>
          <ul className="list-disc list-inside text-gray-300">
            { externalLibraries.map( ( lib, index ) => (
              <li key={ index }>
                <a href={ lib.link } target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                  { lib.name }
                </a> - { lib.description }
              </li>
            ) ) }
          </ul>
        </div>
      ) }

      { externalSources?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-cyan-400">🌍 External Sources</h2>
          <ul className="list-disc list-inside text-gray-300">
            { externalSources.map( ( source, index ) => (
              <li key={ index }>
                <a href={ source.link } target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                  { source.name }
                </a> - { source.description }
              </li>
            ) ) }
          </ul>
        </div>
      ) }

      { contributing && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-pink-400">🤝 Contributing</h2>
          <p>{ contributing }</p>
        </div>
      ) }

      { license && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-red-400">📜 License</h2>
          <p>{ license }</p>
        </div>
      ) }
    </div>
  );
};

export default ReadmeOutput;