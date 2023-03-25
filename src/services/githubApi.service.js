import {Octokit} from 'octokit';

const octokit = new Octokit({ 
    auth: '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',
});

export  const gitHubApi = {
    getCommits : async () => {
        const oct = await octokit.request("GET /repos/{owner}/{repo}/commits", {
                            owner:"soygustavogonzales",
                            repo:"producersdirect"
                        });

        console.log(oct.data)
        const data = oct.data.map( e => {
            return {
                author_name: e.commit.author.name,
                //author_profile_url: e.author.html_url || "",
                //author_avatar_url: e.committer.avatar_url || "",
                commit_message: e.commit.message,
                commit_url: e.commit.url,
                date: e.commit.author.date
            }
        })
        return data;
    }
}