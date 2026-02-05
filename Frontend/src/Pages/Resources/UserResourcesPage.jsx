import { useGetResources } from '../../Hooks/useResources';
import ResourceCard  from '../../Components/Resources/ResourceCard';

const UserResourcesPage = () => {
    const { data, isLoading, error } = useGetResources();

    if(isLoading) return <p>Loading Resources...</p>
    if(error) return <p>Failed to load Resources...</p>

    return (
        <div className='flex flex-col gap-6 px-10 py-6'>
            <h1 className='text-xl text-surface_dark font-semibold'>Resources</h1>
            {data.length === 0 && (
                <p>No resources found</p>
            )}

            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                {data.map((resource) => (
                    <div key={resource._id}>
                        <ResourceCard resource={resource} isManager={false} onDelete={null} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserResourcesPage;