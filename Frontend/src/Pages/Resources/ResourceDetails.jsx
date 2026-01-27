import { useParams, useNavigate } from 'react-router-dom';
import { useGetResourceById, useDeleteResource } from '../../Hooks/useResources';
import { Link } from 'react-router-dom';

const ResourceDetails = () => {
    const { id } = useParams();
    const { data: resource, isLoading, error } = useGetResourceById(id);
    const { mutate: deleteResource, isPending } = useDeleteResource(id);

    if(isLoading) return <p>Loading Resource....</p>
    if(!resource) return <p>Resource not found.</p>
    if(error) return <p>Failed to load resource.</p>

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
        <div className='min-h-90 w-full grid grid-cols-2 gap-10'>
            <img className='object-cover rounded-2xl' src={resource.image} alt={resource.name} />
            <div className="flex flex-col gap-2">
                <h1 className='text-surface_dark text-3xl font-semibold'>{resource.name}</h1>
                <div className="flex gap-4">
                    <p className='text-gray-600 text-base'> <span className='text-surface_dark font-semibold'>Type:</span> {resource.type}</p>
                    <p className='text-gray-600 text-base'><span className='text-surface_dark font-semibold'>Capacity:</span> {resource.capacity}</p>
                </div>
                <p className='text-gray-600 text-base'><span className='text-surface_dark font-semibold'>Description:</span> {resource.description}</p>
                <p>${resource.hourlyRate}/Hour</p>
                <Link to={`/${id}/create-booking`}>
                <button>Book Now</button>
                </Link>
            </div>
        </div>
    )
}

export default ResourceDetails;