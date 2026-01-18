import { useState } from "react";
import { useCreateResource } from "../..//Hooks/useResources";

const CreateResource = () => {
    const { mutate, isPending, error } = useCreateResource();

    const [form, setForm] = useState({
        name: '',
        description: '',
        hourlyRate: '',
        type: '',
        capacity: '',
        image: null
    });

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("capacity", form.capacity);
    formData.append("hourlyRate", form.hourlyRate);
    formData.append("type", form.type);
    formData.append("image", form.image);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if(name === "image") {
            setForm({ ...form, image: files[0]});
        } else {
            setForm({ ...form, [name] : value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("capacity", form.capacity);
        formData.append("hourlyRate", form.hourlyRate);
        formData.append("type", form.type);
        formData.append("image", form.image);
        mutate(formData);
    }

    console.log("Image:", form.image);
    
    return (
        <div>
            <h1>Create Resource</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="type" placeholder="Type" onChange={handleChange} />
                <input type="number" name="hourlyRate" placeholder="Hourly Rate" onChange={handleChange} />
                <input type="file" name="image" onChange={handleChange} />
                <textarea type="file" name="description" placeholder="Description" onChange={handleChange} />
                <textarea type="number" name="capacity" placeholder="Capacity" onChange={handleChange} />
                <button type="submit" disabled={isPending}>
                    {isPending ? 'Creating...' : 'Create'}
                </button>
                    {error && <p>Failed to create resource</p>}
            </form>
        </div>
    )
}

export default CreateResource;