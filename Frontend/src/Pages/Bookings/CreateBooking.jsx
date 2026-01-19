import { useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { useCreateBooking } from '../../Hooks/useBookings'

const CreateBooking = () => {
    const { id: resourceId } = useParams();
    const navigate = useNavigate();
    const { mutate, isPending, error } = useCreateBooking();

    const [form, setForm] = useState({
        startTime: '',
        endTime: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })        
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(
            { 
                resource: resourceId,
                startTime: form.startTime,
                endTime: form.endTime,
            },
            {
                onSuccess: (data) => {
                    navigate(`/${resourceId}/checkout`, { state : {
                        clientSecret: data.clientSecret,
                        bookingId: data.bookingId
                    }});
                },
                onerror: (err) => console.log(err)
            }
        )
    }

    return (
        <div>
            <h1>Create Booking</h1>
            <form onSubmit={handleSubmit}>
                <label>Start Time</label>
                <input type="datetime-local" name='startTime' value={form.startTime} onChange={handleChange} required />
                <label>End Time</label>
                <input type="datetime-local" name='endTime' value={form.endTime} onChange={handleChange} required />

                <button type='submit' disabled={isPending}>
                    {isPending ? 'Processing...' : 'Book Resource'}
                </button>
                    {error && (
                        <p>Failed to create resource</p>
                    )}
            </form>
        </div>
    )

}

export default CreateBooking;