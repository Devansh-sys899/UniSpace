import { useGetResources, useDeleteResource } from '../../Hooks/useResources';
import ResourceCard  from '../../Components/Resources/ResourceCard';
import { toast } from 'react-toastify';

const ManagerResourcesPage = () => {
    const { data, isLoading, error } = useGetResources();
    const { mutate: deleteResource } = useDeleteResource();

    if(isLoading) return <p>Loading Resources...</p>
    if(error) return <p>Failed to load Resources...</p>

    const handleDelete = (resourceId) => {
        deleteResource(resourceId, ({
            onSuccess: () => {
                toast.success('Resource Deleted Successfully');
            }, onError: () => {
                toast.error('Failed to deleted successfully');
            }
        }));
    }

    return (
        <div className='flex flex-col gap-6 px-10 py-6'>
            <h1 className='text-xl text-surface_dark font-semibold'>Resources</h1>
            {data.length === 0 && (
                <p>No resources found</p>
            )}

            <div className='grid grid-cols-4 gap-4'>
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