import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ id, title, price, pictureUrl, description, stock }) => {
  const shortDescription = description ? description.substring(0, 60) + '...' : '';

  return (
    <article className="item-card">
      <img src={pictureUrl} alt={title} className="item-image" loading="lazy" />
      <div className="item-content">
        <h3 className="item-title">{title}</h3>
        {shortDescription && <p className="item-description">{shortDescription}</p>}
        <div className="item-footer">
          <span className="item-price">${price.toLocaleString()}</span>
          <span className={`item-stock ${stock === 0 ? 'out-of-stock' : ''}`}>
            {stock > 0 ? `${stock} disponibles` : 'Sin stock'}
          </span>
        </div>
        <Link to={`/item/${id}`} className="item-button">Ver detalle</Link>
      </div>
    </article>
  );
};

export default Item;
