
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/badge';

const ProjectCard = async({ project, index }) => {
  return (
    <Link href={`/view/${project?.id}`} className="block">
      <Card className={`h-full overflow-hidden rounded-[8px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-slide-up`}
           style={{ animationDelay: `${index * 0.05}s` }}>
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
          <img 
            src={project?.thumbnail}
            alt={project?.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute top-2 right-2 z-20">
            <Badge className="text-xs  capitalize bg-secondary/80 backdrop-blur-sm font-nunito text-violet-100 font-semibold border-[0.2px] border-yellow-50">
              {project?.type}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 pb-0 space-y-2.5">
          <h3 className="text-lg text-cyan-50 tracking-tight font-arsenal font-semibold">{project?.title}</h3>
          <p className="text-sm font-outfit text-violet-100 line-clamp-2">{project?.description}</p>
          
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project?.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech?.name} variant="outline" className="text-xs bg-secondary/50 hover:bg-secondary text-yellow-50 font-code">
                {tech?.name}
              </Badge>
            ))}
            {project?.technologies?.length > 3 && (
              <Badge variant="outline" className="text-xs bg-secondary/50 hover:bg-secondary text-teal-400 font-bold font-code">
                +{project?.technologies?.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-3 flex items-center justify-between">
          {/* <span className="text-xs text-muted-foreground">
            Updated {new Date(project?.updatedAt).toLocaleDateString()}
          </span> */}
          
          <div className="flex items-center space-x-2">
            {/* {project?.repoUrl && (
              <a 
                href={project?.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
            )} */}
            {/* {project?.demoUrl && (
              <a 
                href={project?.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )} */}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;