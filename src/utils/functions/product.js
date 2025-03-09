'use server'

export const getAllProjects = async (category, name, page=1) => {
    try {
        const response = await fetch(`${process.env.NEXT_BASE_PUBLIC_URL}/api/test?category=${encodeURIComponent(category)}&name=${encodeURIComponent(name)}&page=${page}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        // console.log(result.data[0].tags);
        return result;
    } catch (error) {
        console.error(error?.message || error);
        return null;
    }
};