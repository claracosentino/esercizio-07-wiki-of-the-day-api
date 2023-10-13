import { Component } from 'react'
import './App.css'
import { getSearchApi } from './repo/search.repo'

class App extends Component<object, AppStateType> {
  constructor(props: object) {
    super(props)
    this.state = {
      query: '',
      results: [],
      loading: false,
      articleOfTheDay: null
    }
  }

  // Eseguito al Mount del componente
  componentDidMount(): void {
    this.getArticleOfTheDay()
  }

  componentDidUpdate(prevProps: object, prevState: AppStateType): void {
    const { loading } = this.state
    if (prevState.loading !== loading) {
      console.log("Loading changed to", loading)
    }
    if (prevState.loading === true && loading === false) {
      console.log("Results loaded")
    }
  }

  getArticleOfTheDay() {
    this.setState({ loading: true }, () => {
      // call API then update state
    })
  }

  handleInputChange(value: string) {
    this.setState({ query: value })
  }

  handleButtonClick() {
    const { query } = this.state
    this.setState({ loading: true }, () => {
      getSearchApi(query).then((results) => {
        this.setState({ results: results, loading: false })
      })
    })
  }

  render() {
    const { query, results, loading } = this.state
    return <div>
      <h1> Wikipedia Search</h1>
      {/* {articleOfTheDay && <div> ... */}
      <input
        type='text'
        placeholder='Type here...'
        onChange={(event) => this.handleInputChange(event.target.value)}
        value={query}
        disabled={loading} />
      <button onClick={() => this.handleButtonClick()} disabled={loading}>Search</button>
      {results.map((el, i) => (<div key={i}>
        <h3>{el.title}</h3>
        <div>{el.snippet.replace(/<[^>]+>/g, '')}</div>
      </div>))}
    </div>
  }
}

export default App
