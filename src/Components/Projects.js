import './Projects.scss';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="project-grid">
        <div className="project-container">
          <img src="https://raw.githubusercontent.com/davidMfolkins/PoE-Armoury/master/docs/filters_large.png" width="600" height="350"></img>
          <p>PoE Armoury</p>
          <p>A character database for the video game Path of Exile. Users can search characters, browse their inventory/skills, and save to favourites!</p>
        </div>
        <div className="project-container">
          <img src="https://via.placeholder.com/600x350"></img>
          <p>mApp</p>
          <p>A node app with jQuery/AJAX, express, and PostgresQL where users can create public maps and build a personal profile.</p>
        </div>
        <div className="project-container">
          <img src="https://via.placeholder.com/600x350"></img>
          <p>Schedular</p>
          <p>Interview Scheduler is a single-page full stack React scheduler. Users can book appointments, edit those appointments and cancel them! This was part of Lighthouse Labs Curriculum</p>
        </div>
        <div className="project-container">
          <img src="https://via.placeholder.com/600x350"></img>
          <p>Tweeter</p>
          <p>Tweeter is a simple, single-page Twitter clone. This was part of the Lighthouse Labs Curriculum</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
