import axios from 'axios';

// TODO baseURL可以设置到axios实例中
const baseURL = 'http://lcoalhost:8080';

// TODO 这里可以不用object包裹请求，直接export const也是可以的
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
