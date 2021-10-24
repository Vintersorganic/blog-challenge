import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getIndividualBlog = async (id) => {
    const response = await axios.get(baseUrl + id)
    return response.data
}

const addBlog = async (content) => {
    const response = await axios.post(baseUrl, content)
    return response.data
}

const updateBlog = async (id, content) => {
    const response = await axios.put(baseUrl + id, content)
    return response.data
}

const destroyBlog = async (id) => {
    const response = await axios.delete(baseUrl + id) 
    return response.data
}

const blogService = { getAll, getIndividualBlog, addBlog, updateBlog, destroyBlog}

export default blogService