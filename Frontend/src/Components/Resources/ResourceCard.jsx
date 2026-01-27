import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {

    return (
        <Link to={`/user-dashboard/resources/${resource._id}`}>
            <div className="bg-white flex flex-col justify-center pb-6 gap-1 rounded-xl border-2 border-border">
                <img src={resource.image} alt="Tech Lab" />
                <h1 className="text-surface_dark font-[550] text-xl mt-6 ml-5">{resource.name}</h1>
                <div className="flex items-center gap-2 ml-5 text-lg">
                    <p className="text-gray-500 text-base">{resource.type}</p>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className="text-surface_dark font-[550] text-xl ml-6">${resource.hourlyRate}/Hour</h1>
                </div>
            </div>
        </Link>
    )
}

export default ResourceCard;