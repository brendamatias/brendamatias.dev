import Image from 'next/image';
import { Container } from './styles';
import { IProject } from '../../types';

interface ListProjectsProps {
  projects: IProject[];
}

const ListProjects = ({ projects }: ListProjectsProps) => (
  <Container>
    {projects?.map((project) => (
      <li key={project.slug}>
        <a href={project.link} target="_blank" rel="noreferrer">
          <div className="image">
            <Image src={project.image.url} alt={project.image.alt} width={320} height={200} />
          </div>
          <div className="info">
            <strong>{project.title}</strong>

            <div className="technologies">
              {project.technologies.map((technology) => (
                <div key={technology}>{technology}</div>
              ))}
            </div>
          </div>
        </a>
      </li>
    ))}
  </Container>
);

export default ListProjects;
