import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getResourceById, getResources, createResource, deleteResource } from '../Services/resource.service';

export const useGetResources = () => {
    return useQuery({
        queryKey: ['resources'],
        queryFn: getResources,
        select: (data) => data,
        staleTime: 5 * 60 * 1000
    })
};

export const useGetResourceById = (id) => {
    console.log('Fetch resource hook called');
    return useQuery({
        queryKey: ['resource'],
        queryFn: () => getResourceById(id),
        select: (data) => data,
        enabled: !!id,
        staleTime: 5 * 60 * 1000
    })
}

export const useCreateResource = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createResource,
        onSuccess: () => queryClient.invalidateQueries(['resources'])
    })
}

export const useDeleteResource = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteResource,
        onSuccess: () => queryClient.invalidateQueries(['resources'])
    })
}

