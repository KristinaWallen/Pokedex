// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');
  const [url, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState('');

  const handleLessClick = () => {
    setURL(previous);
  }

  const handleMoreClick = () => {
    setURL(next);
  }

  const onSearchChange = (event) => {
    const newSearchField = event.target.value.toLowerCase();
    setSearchField(newSearchField)
  }

  useEffect(() => {
    fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data.results)
      setMonsters(data.results);
      setPrevious(data.previous);
      setNext(data.next);
    })
  }, [url])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  return(
    <>
    <div className="App">
      <h1 className='app-title'>Gotta Catch 'Em All</h1>
      <SearchBox 
      className='search-box'
      onChangeHandler={onSearchChange} 
      placeholder='search pokemon'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    <div className='buttons'>
    {previous && <button onClick={handleLessClick}>Prev</button>}
    {next && <button onClick={handleMoreClick}>Next</button>}
    </div>
    </>
  )
}

export default App;

//same functionality using class components
// class App extends Component {
//   constructor() {
//     super() 
//     this.state = {
//     monsters: [],
//     searchField: '',
//     url: 'https://pokeapi.co/api/v2/pokemon',
//     previous: null,
//     next: '',
//     }
//     this.onSearchChange = this.onSearchChange.bind(this);
//     this.handleLessClick = this.handleLessClick.bind(this);
//     this.handleMoreClick = this.handleMoreClick.bind(this);
//   }

//   getPokemon() {
//     fetch(this.state.url)
//     .then(data => data.json())
//     .then(data => {
//       console.log(data)
//       this.setState({
//         monsters: data.results,
//         previous: data.previous,
//         next: data.next
//       })
//     })
//   }

//   componentDidMount() {
//     this.getPokemon();
//   }

//   handleLessClick() {
//     this.setState({url: this.state.previous})
//   }

//   handleMoreClick() {
//     this.setState({url: this.state.next})
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.url !== prevState.url) this.getPokemon();
//   }

//   onSearchChange(event) {
//     const searchField = event.target.value.toLowerCase();
//     this.setState({searchField})
//   }
 
// render() {
//   console.log('render')
//   const {monsters, searchField} = this.state;
//   const {onSearchChange} = this;
// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLowerCase().includes(searchField);
// })

//   return (
//     <>
//     <div className="App">
//       <h1 className='app-title'>Gotta Catch Em All</h1>
//       <SearchBox 
//       className='search-box'
//       onChangeHandler={onSearchChange} 
//       placeholder='search pokemon'
//       />
//       <CardList monsters={filteredMonsters}/>
//     </div>
//     <div className='buttons'>
//     {this.state.previous && <button onClick={this.handleLessClick}>Prev</button>}
//     {this.state.next && <button onClick={this.handleMoreClick}>Next</button>}
//     </div>
//     </>
//   );
//   }
// }


