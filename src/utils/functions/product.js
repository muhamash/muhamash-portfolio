'use server'

export const getAllProjects = async (tags, page=1) => {
    try {
        const response = await fetch(`http://localhost:3000/api/test?tags=${encodeURIComponent(tags)}&page=${page}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        // console.log(result.data[0].tags);
        return result;
    } catch (error) {
        console.error(error.message || error);
        return null;
    }
};