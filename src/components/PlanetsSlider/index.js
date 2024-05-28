import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'
const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="main-header">PLANETS</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetItem={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
