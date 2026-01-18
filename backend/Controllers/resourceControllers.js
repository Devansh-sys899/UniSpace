const Resource = require('../Models/Resource');

const createResource = async (req,res) => {
    try {
        const { name, type, description, capacity, hourlyRate } = req.body;
        const imageURL = req.file ? req.file.path: '';

        console.log('Data received:', req.file);
    
        if(!name || !type || !capacity || !hourlyRate) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all the fields'
            });
        }
    
        const newResource = new Resource({
            name,
            type,
            image: imageURL,
            description,
            capacity,
            hourlyRate
        });
    
        await newResource.save();
        return res.status(201).json({
            success: true,
            message: 'Resource created successfully'
        })
    } catch (error) {
        console.error('Error during creating resource: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getResources = async (req,res) => {
    try {
        const resources = await Resource.find({});
        
        return res.status(200).json({
            success: true,
            data: resources
        });
    } catch (error) {
        console.error('Error during fetching resources: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getResourceById = async (req,res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findById(id);
        
        if(!resource) {
            return res.status(404).json({
                success: false,
                message: 'Resource not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: resource
        })
    } catch (error) {
        console.error('Error during fetching resources: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateResources = async (req,res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findByIdAndUpdate( 
            id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if(!resource) {
            return res.status(404).json({
                success: false,
                message: 'Resource not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Resource updated successfully'
        })
    } catch (error) {
        console.error('Error during updating resources: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteResource = async(req,res) => {
    try {
        const { id } = req.params;
        const resource = await Resource.findByIdAndDelete(id);
        if(!resource) {
            return res.status(404).json({
                success: false,
                message: 'Resource not found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Resource deleted successfully'
        })
    } catch (error) {
        console.error('Error during deleting of resources: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createResource, getResources, getResourceById, updateResources, deleteResource };