import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {

    return (
        <Link to={`/resources/${resource._id}`}>
            <img src={resource.image} />
            <h2>{resource.name}</h2>
            <p>Type: {resource.type}</p>
            <p>{resource.description}</p>
            <p>${resource.hourlyRate}/hour</p>
        </Link>
    )
}

export default ResourceCard;