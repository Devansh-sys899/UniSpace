import { useGetResources } from '../../Hooks/useResources';
import ResourceCard  from '../../Components/Resources/ResourceCard';

const ResourceList = () => {
    const { data, isLoading, error } = useGetResources();

    if(isLoading) return <p>Loading Resources...</p>
    if(error) return <p>Failed to load Resources...</p>

    return (
        <div>
            <h1>Resources</h1>
            {data.length === 0 && (
                <p>No resources found</p>
            )}

            <div>
                {data.map((resource) => (
                    <ResourceCard key={resource._id} resource={resource} />
                ))}
            </div>
        </div>
    )
}

export default ResourceList;