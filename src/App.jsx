import React from 'react'
import './style.sass'

import Hero from './components/hero/Hero'
import { getUserInfo, getRepos } from './services/GithubApi'
import Repositories from './components/repositories/respositories';
import SearchBar from './components/search_bar/SearchBar';

import { Puff } from 'react-loader-spinner';

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

  if (!state.repos_data) return <Puff
    height="80"
    width="80"
    radius={1}
    color="rgb(219 39 119)"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    visible={true}
  />

  return <>
    <Hero description={state?.basic_info?.bio} />
    <section className="container mx-auto w-full text-center">
      <h3 className='text-3xl font-bold mb-5 '>My Projects</h3>
    </section>
    <SearchBar onChange={e => setState({ ...state, search_string: e.target.value })} />
    <Repositories repos={
      state.search_string ?
        state.repos_data.filter(x => {
          const regular_expression = new RegExp(state.search_string, 'i')

          if (x.name.match(regular_expression)) return x.name
        })
        :
        state.repos_data
    } />
  </>
}