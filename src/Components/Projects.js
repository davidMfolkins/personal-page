import './Projects.scss';
import map from '../images/map.png'

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="project-grid">
        <div className="project-container">
          <img
            src="https://raw.githubusercontent.com/davidMfolkins/PoE-Armoury/master/docs/filters_large.png"
            width="600"
            height="350"
            alt="PoE"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/davidMfolkins/PoE-Armoury', '_blank');
            }}
          ></img>
          <p>PoE Armoury</p>
          <p>A character database for the video game Path of Exile. Users can search account names, see the account's characters and browse their inventory/skills. Users can also create an account and favoruite certain character builds to view at another time.</p>
        </div>

        <div className="project-container">
          <img
            src={map}
            width="600"
            height="350"
            alt="mApp"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/davidMfolkins/mApp', '_blank');
            }}
          ></img>
          <p>mApp</p>
          <p>A node app with jQuery/AJAX, express, and using the google maps api where users can create public maps. User can drop pins on their map, describe what is there and add pictures. Users can publish these maps, favourite them and also contribute to eachother maps</p>
        </div>

        <div className="project-container">
          <img
            src="https://raw.githubusercontent.com/davidMfolkins/scheduler/master/public/docs/book-interview.png"
            width="600"
            height="350"
            alt="Schedular"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/davidMfolkins/scheduler', '_blank');
            }}
          ></img>
          <p>Schedular</p>
          <p>Interview Scheduler is a single-page full stack React scheduler. Users can book appointments, edit those appointments and cancel them! This was part of Lighthouse Labs curriculum</p>
        </div>

        <div className="project-container">
          <img
            src="https://raw.githubusercontent.com/davidMfolkins/tweeter/master/public/docs/desktop-mode.png"
            width="600"
            height="350"
            alt="Tweeter"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/davidMfolkins/tweeter', '_blank');
            }}
          ></img>
          <p>Tweeter</p>
          <p>Tweeter is a simple, single-page Twitter clone. User can tweet and see their tweets display automatically. This was part of the Lighthouse Labs curriculum</p>
        </div>

        <div className="project-container">
          <img
            src="https://raw.githubusercontent.com/davidMfolkins/spotify-artist-search/master/spotify-artist-search/docs/albumpage.png"
            width="600"
            height="350"
            alt="Spotify-artist-search"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/davidMfolkins/spotify-artist-search', '_blank');
            }}
          ></img>
          <p>Spotify Artist Search</p>
          <p>Spotify Artist Search app is a tool where users can login using Spotify account, search for artists and view their albums. Users can select albums which brings you to the Spotify album page where users can listen to selected album</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
