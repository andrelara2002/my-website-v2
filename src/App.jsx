import React from 'react'
import './style.sass'

import Hero from './components/hero/Hero'
import { getUserInfo, getRepos } from './services/GithubApi'
import Repositories from './components/repositories/respositories';
import SearchBar from './components/search_bar/SearchBar';

export default function App() {

  const TIME_TO_UPDATE_IN_SECONDS = 5;

  const [state, setState] = React.useState({
    basic_info: false,
    repos_data: false,
    search_string: '',
    filtered_data: []
  })

  const getData = async () => {
    const user = await getUserInfo()
    const repos = await getRepos()

    if (user.status === 200 && repos.status === 200) {
      setState({ ...state, basic_info: user.data, repos_data: repos.data })
    }

  }

  React.useEffect(() => {
    const getData = async () => {
      const user = await getUserInfo()
      const repos = await getRepos()
      console.log(repos?.data)

      if (user.status === 200 && repos.status === 200) {
        setState({ ...state, basic_info: user.data, repos_data: repos.data })
      }

    }

    getData()
  }, [])

  if (!state.repos_data) return <p>Loading </p>

  return <>
    <Hero description={state?.basic_info?.bio} />
    <SearchBar onChange={e => setState({ ...state, search_string: e.target.value })} />
    <Repositories repos={state.repos_data} />
  </>
}