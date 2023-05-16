import axios from 'axios'

const GIT_USER = 'andrelara2002'

const api = axios.create({
    baseURL: "https://api.github.com/users/andrelara2002"
})

export default api

export async function getRepos() {
    return await api.get('/repos')
}

export async function getRepoLanguages(repo) {
    return await api.get(`/repos/${repo}/languages`)
}

export async function getUserInfo() {
    return await api.get('')
}