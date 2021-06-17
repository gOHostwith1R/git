export default class GitHubService {

    _apiBase = `https://api.github.com/users/`;

    async getResource(url) {
        const res =  await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`) //потому запилить, когда нет пользователя
        }

        const body = await res.json();
        return body;
    }

    async getPeople(nickName) {
        const people =  await this.getResource(`${nickName}` );
        return this.transformPerson(people);
    }

    async getRepositories(nickName) {
        const res = await this.getResource(`${nickName}/repos`)
        return res.results.map(this.transformData);
    }

    transformPerson = (person) => {
        return {
            avatarUrl: person.avatar_url,
            name: person.name,
            login: person.login,
            followers: person.followers,
            following: person.following,
            htmlUrl: person.html_url,
        };
    }

    transform = (repos) => {
        return {
            name: repos.name,
            description: repos.description
        }
    }
}
