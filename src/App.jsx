import React from 'react'
import './App.css'

import Hero from './components/hero/Hero'
import { getUserInfo, getRepos } from './services/GithubApi'

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

    console.log(!state.basic_info)
  }

  React.useEffect(() => {
    getData()
  }, [])

  if (!state.basic_info) { <p>Loading</p> }
  else (
    <>
      <Hero />

    </>
  )

}