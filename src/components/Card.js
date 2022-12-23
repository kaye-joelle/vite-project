import createElement from "../utils/createElement";

const Card = ({ text = 'Bonjour', src, tagName = 'div', classList ='card'} = {}) => createElement(
  {
    tagName,  
    classList,
    children: [
      {
        tagName: 'img',
        classList: 'card-img-top',
        attributes: {
          src: src || 'https://via.placeholder.com/300'
        }
      },
      {
        tagName: 'p',
        text,
      },
    ]
  }
)

export default Card