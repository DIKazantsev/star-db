import React from "react";
import "./random-planet.css";
import Spinner from '../spinner/'
import ErrorIndicator from '../error-indicator/'
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  static defaultProps = {
    updateInterval: 10000
  }

  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateData();
    this.interval = setInterval(this.updateData, updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  }
  onError = (err) => {
    this.setState({ error: true, loading: false })
  }

  updateData = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    console.log('render')
    const { planet, loading, error } = this.state;
    const hasData = !error

    return (
      <div className="random-planet jumbotron rounded" >
        {loading ? <Spinner /> : hasData ?
          <PlanetView planet={planet} /> : <ErrorIndicator />}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diametr } = planet;
  return (
    <><div className="random-planet_content">
      <img
        className="planet_img"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
    </div>
      <div className="random-planet_info">
        <h3>{name}</h3>
        <table className="planet_characteristic">
          <tbody>
            <tr>
              <td>Population</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Rotation Period</td>
              <td>{rotationPeriod}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{diametr}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}