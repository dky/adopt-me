const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ])
}

class App extends React.Component {
  handleTitleClick() {
    alert('you clicked the title')
  }
  render() {
    return React.createElement('div', {}, [
      React.createElement(
        'h1',
        { onClick: this.handleTitleClick },
        'Adopt Me!'
      ),
      React.createElement(Pet, {
        name: 'Pepper',
        animal: 'bird',
        breed: 'Cockatil',
      }),
      React.createElement(Pet, {
        name: 'Lucky',
        animal: 'dog',
        breed: 'Lab',
      }),
      React.createElement(Pet, {
        name: 'Chusei',
        animal: 'dog',
        breed: 'Shiba',
      }),
    ])
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
