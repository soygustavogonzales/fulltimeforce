import logo from './logo.svg';
import './App.css';
import commitIcon from './git-commit.png';
import { useEffect, useState } from 'react';
import {Octokit} from 'octokit';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function App() {

  const [commits, setCommits] = useState([])
  const octokit = new Octokit({ 
    auth: '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',
  });
  useEffect(() => {

    const getOct = async ()=> {

      const oct = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner:"soygustavogonzales",
        repo:"producersdirect"
      });
      console.log(oct.data)
      const data = oct.data.map( e => {
        return {
          author_name: e.commit.author.name,
          //author_profile_url: e.author.html_url,
          //author_avatar_url: e.committer.avatar_url,
          commit_message: e.commit.message,
          commit_url: e.commit.url
        }
      })
      setCommits(data);


    };
    getOct()
    .catch(err => console.log("An error ocurred"))


  },[])
  
  return (
    <div className="App">


      <VerticalTimeline>
        {
        commits.map((commit,key) => 
          
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              key={key}
            >
              <h3 className="vertical-timeline-element-title">{commit.author_name}</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
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
