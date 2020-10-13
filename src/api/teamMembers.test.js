import axios from 'axios';
import teamMembers from './teamMembers';

jest.mock('axios');

describe('teamMembers', () => {
  describe('getAll', () => {
    it('calls api to get members', async () => {
      axios.get.mockResolvedValue({});

      await teamMembers.getAll();

      expect(axios.get).toHaveBeenCalledWith('http://lcoalhost:8080/');
    });
    it('throws error if api call fails', async () => {
      axios.get.mockRejectedValue(new Error());

      await expect(teamMembers.getAll()).rejects.toThrow(Error);
    });
  });
  describe('createTeamMember', () => {
    it('create a team member', async () => {
      const teamMember = {};

      await teamMembers.saveMember(teamMember);

      expect(axios.post).toHaveBeenCalledWith('http://lcoalhost:8080/', teamMember);
    });

    it('throws error if api call fails', async () => {
      axios.post.mockRejectedValue(new Error());

      await expect(teamMembers.saveMember({})).rejects.toThrow(Error);
    });
  });
});
