import {Component} from 'react';
import './card.styles.css'

class Card extends Component {
  constructor() {
  super();
  this.state = {
    image: 'loading',
    species: ''
  }
}

  getImage() {
    const {name} = this.props.monster;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        image: data.sprites.front_default,
        height: data.height})
    })
  }

  componentDidMount() {
    this.getImage();
  }

  componentDidUpdate(prevProps, prevState) {
    const {name} = this.props.monster;
    if (name !== prevProps.name) this.getImage();
  }

  render() {
    const {name} = this.props.monster;
    return (
    <div className='card-container' key={name}>
      <img 
        alt={`monster.name`} 
        src={this.state.image}
        width={150}
        height={150}/>
        <h2>{name}</h2>
        <p>Height: {this.state.height}</p>
    </div>)
  }
}

export default Card;