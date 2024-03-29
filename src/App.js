import logo from './logo.svg';
import './App.css';
import commitIcon from './git-commit.png';
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { gitHubApi } from './services/githubApi.service';

function App() {

  const [commits, setCommits] = useState([])

  useEffect(() => {

    const getOct = async ()=> {

      const response = await gitHubApi.getCommits();
      console.log("data >>", response.data)
      setCommits(response.data);

    };
    getOct()
    .catch(err => console.log("An error ocurred", err))


  },[])
  
  return (
    <div className="App">
      <pre>
        {
          commits
        }
      </pre>
      <h1>Commits Log History of FullTimeForce Repository</h1>
      <VerticalTimeline>
        {
        commits.map((commit,key) => 
          
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              key={key}
              date={commit.date.substr(1,12)}
            >
              <h3 className="vertical-timeline-element-title"><span>Author : </span>{commit.author_name}</h3>
              <h4 className="vertical-timeline-element-subtitle"><span>When : </span>{commit.date.substr(0,10)}</h4>
              <p>
                {commit.commit_message}
              </p>
            </VerticalTimelineElement>
          
        )}


      </VerticalTimeline>
    </div>
  );
}

export default App;
