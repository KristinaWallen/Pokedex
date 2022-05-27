// import {Component} from 'react';
import React, {useState, useMemo} from 'react';
import './card.styles.css'

const Card = ({monster}) => {
  const [image, setImage] = useState('loading');
  const [abilities, setAbilities] = useState([])
  const {name} = monster;

  useMemo(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(data => data.json())
    .then(data => {
      setImage(data.sprites.front_default);
      setAbilities(data.abilities);
      })
  }, [name])

  const renderedAbilities = abilities.map((ability, i) => {
    return (<div key={i}>{ability.ability.name}</div>)
  })

  return (
    <div className='card-container' key={name}>
      <img 
        alt={`monster.name`} 
        src={image}
        width={150}
        height={150}/>
        <h2>{name}</h2>
        <p>Abilities: {renderedAbilities}</p>
    </div>)
}

export default Card;

//same functionality using class components
// class Card extends Component {
//   constructor() {
//   super();
//   this.state = {
//     image: 'loading',
//     abilities : []
//   }
// }

//   getImage() {
//     const {name} = this.props.monster;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     .then(data => data.json())
//     .then(data => {
//       this.setState({
//         image: data.sprites.front_default,
//         abilities: data.abilities})
//     })
//   }

//   componentDidMount() {
//     this.getImage();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const {name} = this.props.monster;
//     if (name !== prevProps.name) this.getImage();
//   }

//   render() {
//  const {abilities} = this.state
  // const renderedAbilities = abilities.map((ability, i) => {
  //   return (<div key={i}>{ability.ability.name}</div>)
  // })
//     const {name} = this.props.monster;
//     return (
//     <div className='card-container' key={name}>
//       <img 
//         alt={`monster.name`} 
//         src={this.state.image}
//         width={150}
//         height={150}/>
//         <h2>{name}</h2>
//         <p>Abilities: {renderedAbilities}</p>
//     </div>)
//   }
// }

