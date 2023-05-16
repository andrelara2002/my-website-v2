import React from 'react'
import './App.css'

import Hero from './components/hero/Hero'
import { getUserInfo, getRepos } from './services/GithubApi'


export default function App() {

  const { state, setState } = React.useState({
    basic_info: undefined,
    repos_data: undefined,
    search_string: '',
    filtered_data: []
  })

  const getBasicInfo = async () => { }

  React.useState(() => {
    
  }, [])

  if (!state?.basic_info) { <p>Loading</p> }
  else (
    <>
      <Hero />
      <Card />
    </>
  )

}