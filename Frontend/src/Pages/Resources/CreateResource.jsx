import { useState } from "react";
import { useCreateResource } from "../..//Hooks/useResources";
import { toast } from 'react-toastify'

const CreateResource = () => {
    const { mutate, isPending, error } = useCreateResource();
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        name: '',
        description: '',
        hourlyRate: '',
        type: '',
        capacity: '',
    });

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
        formData.append("image", imageFile);
        mutate(formData, ({
            onSuccess: () => {
                toast.success('Resource Created Succefully'); 
            }, onError: () => {
                toast.error('Failed to create resource');
            }
        }));
    }
    
    return (
        <div className='min-h-screen w-full py-12 flex flex-col justify-center gap-6'>
            <div className="flex flex-col gap-2 justify-center px-20">
                <h1 className="text-4xl text-surface_dark font-medium">Create Resource</h1>
                <p className="text-base text-gray-500 font-[350]">Add a resource that users can book</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 px-20">
                <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-900">Resource Name</p>
                    <input type="text" name="name" placeholder="eg. Computer Lab" onChange={handleChange} className="border-[1px] border-border pl-4 py-2 text-gray-500 font-light rounded-lg"/>
                </div>
                <div>
                    <label className="block text-base font-medium text-gray-700">Image</label>

                    <div className="mt-2 rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition">
                        <input type="file" className="hidden" id="image-upload" onChange={ (e) => {
                            const file = e.target.files[0];
                            setImageFile(file);
                            setPreview(URL.createObjectURL(file));
                        }} />

                        <div onClick={() => document.getElementById("image-upload").click()} className="mt-2 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-100/25 transition">
                            {preview ? (
                                <img src={preview} alt="Preview" className="mx-auto w-full h-40 object-cover rounded-lg"/>
                            ):(
                                <>
                                    <i className="bx bx-image text-3xl text-gray-400"></i>    
                                    <p className="mt-2 text-sm text-gray-400">CLick to upload or drag & drop</p>
                                </>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <label className="text-base font-medium text-gray-700">Resource Type</label>
                    <select name="type" onChange={handleChange} className="border-[1px] border-border pl-2 py-2 text-gray-500 font-light rounded-lg w-full">
                        <option value="Equipment">Equipment</option>
                        <option value="Room">Room</option>
                        <option value="Space">Space</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-base font-medium text-gray-700">Capacity</label>
                        <input type="number" name="capacity" onChange={handleChange} className="mt-2 w-full rounded-xl border pl-3 py-2 border-gray-300" placeholder="20"/>
                    </div>
                    
                    <div>
                        <label className="block text-base font-medium text-gray-700">Price per Hour</label>
                        <input type="number" name="hourlyRate" onChange={handleChange} className="mt-2 w-full rounded-xl border pl-3 py-2 border-gray-300" placeholder="$100"/>
                    </div>
                </div>
                <div>
                    <label className="block text-base font-medium text-gray-700">Description</label>
                    <textarea rows={4} name="description" onChange={handleChange} className="mt-2 w-full rounded-xl border pl-2 py-2 border-gray-300" placeholder="Describe the space, facilities and best use cases..."/>
                </div>
                <div className="pt-4 flex justify-start gap-3">
                    <button className="px-5 py-2 rounded-xl text-gray-600 hover:bg-gray-100">Cancel</button>
                    <button className="px-5 py-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-black">Create Resource</button>
                </div>
                    {error && <p>Failed to create resource</p>}
            </form>
        </div>
    )
}

export default CreateResource;