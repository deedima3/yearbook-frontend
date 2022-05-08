import axios from 'axios'

axios.create({
    baseURL: 'https://api.imgbb.com/1/upload',
})

export const uploadToImageBB = async (img : Blob) => {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("key", 'e2872a704b861f1ddcf3bd0f0a397a8a')
    let data = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data.data.data.display_url
}