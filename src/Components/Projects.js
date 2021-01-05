import './Projects.scss';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="project-grid">
        <div>
          <img src="https://via.placeholder.com/300x200"></img>
          <p>Project1</p>
          <p>description</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200"></img>
          <p>Project2</p>
          <p>description</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200"></img>
          <p>Project3</p>
          <p>description</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200"></img>
          <p>Project4</p>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
