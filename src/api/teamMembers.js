import axios from 'axios';

const baseURL = 'http://lcoalhost:8080';

const teamMembers = {
  saveMember: async (teamMember) => {
    await axios.post(`${baseURL}/`, teamMember);
  },
  getAll: async () => {
    const response = await axios.get(`${baseURL}/`);
    return response.data;
  },
};
export default teamMembers;
