import { useGetResources, useDeleteResource } from '../../Hooks/useResources';
import ResourceCard  from '../../Components/Resources/ResourceCard';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ManagerResourcesPage = () => {
    const { data, isLoading, error } = useGetResources();
    const { mutate: deleteResource } = useDeleteResource();
    const navigate = useNavigate();

    if(isLoading) return <p>Loading Resources...</p>
    if(error) return <p>Failed to load Resources...</p>

    const handleDelete = (resourceId) => {
        deleteResource(resourceId, ({
            onSuccess: () => {
                toast.success('Resource Deleted Successfully');
                navigate('/manager-dashboard')
            }, onError: () => {
                toast.error('Failed to deleted successfully');
            }
        }));
    }

    return (
        <div className='flex flex-col gap-6 px-10 py-6'>
            <h1 className='text-3xl text-surface_dark font-semibold text-center'>Resources</h1>
            {data.length === 0 && (
                <p>No resources found</p>
            )}

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:px-10 gap-4'>
                {data.map((resource) => (
                    <div key={resource._id}>
                        <ResourceCard resource={resource} isManager={true} onDelete={handleDelete} />
                    </div>
            ))}
            </div>
        </div>
    )
}

export default ManagerResourcesPage;