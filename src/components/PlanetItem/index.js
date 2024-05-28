import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem
  return (
    <div className="container">
      <img src={imageUrl} alt={`planet ${name}`} className="image-1" />
      <h1 className="main-heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
