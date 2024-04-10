import { useState } from 'react'

function ImageGenerator() {
  const [title, setTitle] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [images, setImages] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Validation du formulaire')
    console.log(title, width, height)

    // Générer une image aléatoirement
    const randomImage = `https://picsum.photos/${width}/${height}?random=${Math.random()}`
    setImages([...images, randomImage])
  }

  function filterNumericValues(str) {
    return parseInt(str.replace(/\D/g, '')) || 0
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }
  function handleChangeWidth(e) {
    // Forcer à ne garder que des caractères numériques
    setWidth(filterNumericValues(e.target.value))
  }
  function handleChangeHeight(e) {
    setHeight(filterNumericValues(e.target.value))
  }

  return (
    <div>
      <h2>Générateur d'image</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre de l'image</label>
          <input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Indiquer ici le titre à afficher"
          />
        </div>

        <div>
          <label>Largeur de l'image</label>
          <input type="number" value={width} onChange={handleChangeWidth} placeholder="Largeur en pixels !" />
        </div>

        <div>
          <label>Hauteur de l'image</label>
          <input type="number" value={height} onChange={handleChangeHeight} placeholder="Hauteur attendue en px" />
        </div>

        <button type="submit">Valider</button>
      </form>

      <hr />
      {/* Afficher les images */}
      <div>
        {images.map((img, index) => (
          <img key={index} src={img} alt={title} title={title} />
        ))}
      </div>
    </div>
  )
}

export default ImageGenerator