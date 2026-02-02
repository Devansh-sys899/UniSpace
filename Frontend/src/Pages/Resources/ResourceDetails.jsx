import { useState } from 'react';
import { useCreateBooking } from '../../Hooks/useBookings'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useGetResourceById, useDeleteResource } from '../../Hooks/useResources';
import { Link } from 'react-router-dom';
import { Calendar, TimeSlots } from '../../Components/Public/Calendar';
import { BookingSummary } from '../../Components/Public/BookingSummary';


const ResourceDetails = () => {
    const { id } = useParams();
    const { data: resource, isLoading, error } = useGetResourceById(id);
    const { mutate: deleteResource, isPending } = useDeleteResource(id);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();
    const { mutate: createBooking, isPending: isBookingPending } = useCreateBooking();

    console.log('Date:', selectedDate)
    console.log('Slot:', selectedSlots)

    if(isLoading) return <p>Loading Resource....</p>
    if(!resource) return <p>Resource not found.</p>
    if(error) return <p>Failed to load resource.</p>

    const buildBookingTimes = () => {
        if(!selectedDate || selectedSlots.length === 0) return null;
        
        const sortedSlots = [...selectedSlots].sort();
        const start = new Date(selectedDate);
        const end = new Date(selectedDate);

        const [startHour, startMin] = sortedSlots[0].split(':');
        const [endHour, endMin] = sortedSlots[sortedSlots.length - 1].split(':');
        
        start.setHours(parseInt(startHour), parseInt(startMin), 0, 0);
        end.setHours(parseInt(endHour), parseInt(endMin), 0, 0);

        return { 
            startTime: start.toISOString(),
            endTime: end.toISOString(),
        };
    }

    const handleBooking = () => {
        const times = buildBookingTimes();
        if(!times) return;

        createBooking(
            {
                resource: resource._id,
                startTime: times.startTime,
                endTime: times.endTime,
            },
            {
                onSuccess: (data) => {
                    navigate(`/${resource._id}/checkout`, {
                        state: {
                            clientSecret: data.clientSecret,
                            bookingId: data.bookingId,
                        }
                    });
                }
            }
        )
    }   
    
    const handleDelete = () => {
        const confirm = window.confirm('Are you sure you want to delete this resource');
        if(!confirm) return;

        deleteResource(id, {
            onSuccess: () => {
                navigate('/resources');
            }
        })
    }


    return (
        <div className='min-h-90 w-full grid grid-cols-[7fr_3fr] gap-10'>
            <div className="flex flex-col gap-2">
                <div className="w-24 p-6 py-2 rounded-3xl text-xs flex items-center justify-center bg-gray-100 text-accent">{resource.type}</div>
                <h1 className='text-surface_dark text-[38px] font-semibold'>{resource.name}</h1>
                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <i className="bx bxs-star text-accent"></i>
                        <p className="text-gray-600 text-base">(128 review)</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <i className="bx bxs-location-plus text-accent"></i>
                        <p className="text-gray-600 text-base">Floor 12, East Wing</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <i className="bx bxs-group text-accent"></i>
                        <p className="text-gray-600 text-base">27 people</p>
                    </div>
                </div>
                <img className='object-cover rounded-2xl' src={resource.image} alt={resource.name} />
                <div className="flex flex-col mt-2">
                    <p className="text-xl font-semibold text-surface_dark">About this Space</p>
                    <p className="text-lg text-gray-600">{resource.description}</p>
                </div>
                <div className='grid grid-cols-3 border-t-[1px] border-b-[1px] pb-5 border-border pt-5 mt-5'>
                    <div className='w-full flex gap-3 items-center'>
                        <i className="bx bx-buildings bg-green-100 text-accent flex items-center justify-center rounded-lg p-2 text-lg"></i>
                        <div className="flex flex-col">
                            <p className="text-surface_dark text-base font-semibold">Innovative Tower</p>
                            <p className="text-gray-600 text-base font-normal">Floor 13, East building</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <i className="bx bx-time bg-green-100 text-accent flex items-center justify-center rounded-lg p-2 text-lg"></i>
                        <div className="flex flex-col">
                            <p className="text-surface_dark text-base font-semibold">Quick Reponse</p>
                            <p className="text-gray-600 text-base font-normal">Usually respond within 1 hour</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <i className="bx bx-shield bg-green-100 text-accent flex items-center justify-center rounded-lg p-2 text-lg"></i>
                        <div className="flex flex-col">
                            <p className="text-surface_dark text-base font-semibold">Verified Space</p>
                            <p className="text-gray-600 text-base font-normal">Quality Assured by UniSpace</p>
                        </div>
                    </div>
                </div>
                    <div className="w-full flex flex-col gap-6 py-4">
                        <h1 className="text-xl text-surface_dark font-semibold">What this space offer</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bx-wifi rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">High Speed Internet</p>
                            </div>
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bx-desktop rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">4K Display</p>
                            </div>
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bx-camera-movie rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">Video Conferencing</p>
                            </div>
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bx-pen rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">Digital Whiteboard</p>
                            </div>
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bx-coffee rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">Coffee Service</p>
                            </div>
                            <div className="bg-gray-100/70 rounded-lg flex gap-4 items-center justify-start p-4">
                                <i className="bx bxs-thermometer rounded-lg text-gray-700 font-normal text-xl p-1 bg-white"></i>
                                <p className="text-base text-gray-600">Temperature Control</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="space-y-6 sticky top-10">
                <Calendar bookedDates={['09', '10', '15']} onSelect={setSelectedDate} />
                {selectedSlots && (
                    <>
                    <div>
                        <h4 className="font-semibold mb-2">Select Time slots</h4>
                        <TimeSlots selectedSlots={selectedSlots} setSelectedSlotes={setSelectedSlots} />
                    </div>

                    <BookingSummary date={selectedDate} slots={selectedSlots} />
                        <button
                        onClick={handleBooking}
                        disabled={!selectedSlots.length}
                        className='w-full py-3 rounded-xl bg-gray-900 text-white font-semibold disabled:opacity-50'>
                            { isBookingPending ? 'Processing...' : 'Proceed to Booking' }
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ResourceDetails;