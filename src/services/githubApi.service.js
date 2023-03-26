import axios from 'axios';


export  const gitHubApi = {
    getCommits : async () => {
        return await axios.get("/api/getAllCommits");
    }
}