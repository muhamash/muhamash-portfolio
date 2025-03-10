
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/badge';

const ProjectCard = async({ project, index }) => {
  return (
    <Link href={`/projects/${project?.id}`} className="block">
      <Card className={`h-full overflow-hidden bg-card transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-slide-up`}
           style={{ animationDelay: `${index * 0.05}s` }}>
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
          <img 
            src={project?.thumbnail}
            alt={project?.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute top-2 right-2 z-20">
            <Badge variant="secondary" className="text-xs font-medium capitalize bg-secondary/80 backdrop-blur-sm">
              {project?.type}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 pb-0 space-y-2.5">
          <h3 className="font-medium text-lg tracking-tight">{project?.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project?.description}</p>
          
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project?.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech?.name} variant="outline" className="text-xs bg-secondary/50 hover:bg-secondary">
                {tech?.name}
              </Badge>
            ))}
            {project?.technologies?.length > 3 && (
              <Badge variant="outline" className="text-xs bg-secondary/50 hover:bg-secondary">
                +{project?.technologies?.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Updated {new Date(project?.updatedAt).toLocaleDateString()}
          </span>
          
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