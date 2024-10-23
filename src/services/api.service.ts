import axios from "axios";
import {IFormProps} from "../models/IFormProps";

const sendDataToServer = async (data: IFormProps) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        console.log('Data sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};

export default sendDataToServer;