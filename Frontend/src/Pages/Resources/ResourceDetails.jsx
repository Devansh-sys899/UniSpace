import { useParams, useNavigate } from 'react-router-dom';
import { useGetResourceById, useDeleteResource } from '../../Hooks/useResources';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

const ResourceDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { data: resource, isLoading, error } = useGetResourceById(id);
    const { mutate: deleteResource, isPending } = useDeleteResource(id);

    if(isLoading) return <p>Loading Resource....</p>
    if(!resource) return <p>Resource not found.</p>
    if(error) return <p>Failed to load resource.</p>

    console.log('Resource Data:', resource);

    const handleDelete = () => {
        const confirm = window.confirm('Are you sure you want to delete this resource');
        if(!confirm) return;

        deleteResource(id, {
            onSuccess: () => {
                navigate('/resources');
            }
        })
    }

    const handleBooking = () => {
        createBooking(
            {
                resource: resource._id,
                startTime,
                endTime
            },
            {
                onSuccess: (data) => {
                    console.log('Client Secret:', data.clientSecret);
                }
            }
        )
    }

    return (
        <div>
            <img src={resource.image} alt={resource.name} />
            <h1>{resource.name}</h1>
            <p>{resource.description}</p>
            <p>Type: {resource.type}</p>
            <p>${resource.hourlyRate}/Hour</p>
            <p>Capacity: {resource.capacity}</p>
            <Link to={`/${id}/create-booking`}>
                <button>Book Now</button>
            </Link>
        </div>
    )
}

export default ResourceDetails;