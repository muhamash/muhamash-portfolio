import { Badge } from "../ui/badge";
import CallToAction from "./CallToAction";

export default async function ProjectDetailsHeader({ project }) {
    return (
        <div className=" text-black">
            <div>
                <Badge className={ "font-code" }>
                    Fullstack
                </Badge>
            </div>
            {/* Project Name */ }
            <h1 className="text-3xl lg:text-4xl font-bold font-arsenal">{ project.name }</h1>

            {/* Project Description */ }
            <p className="text-gray-800 mt-3 text-lg font-nunito">{ project.description }</p>

            {/* Features List */ }
            <div className="flex flex-col gap-3 py-5">
                <h1 className="font-edu font-bold">Features:</h1>
                <div className="flex flex-wrap gap-3">
                    { project.features.map( ( feature, index ) => (
                        <Badge
                            key={ index }
                            variant="warning"
                            className={ "font-outfit text-slate-700" }
                        >
                            { feature }
                        </Badge>
                    ) ) }
                </div>
            </div>

            {/* Call to Action */ }
            <CallToAction project={project}/>
        </div>
    );
}