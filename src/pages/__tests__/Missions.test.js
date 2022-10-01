import axios from 'axios';
import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/configStore';
import { fetchMissions } from '../../Redux/Missions/missions';
import Missions from '../MissionPage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');
const TestMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);
const response = {
  data: [
    {
      mission_id: 1,
      mission_name: 'mission name',
      description: 'mission description',
      active: false,
    },
  ],
};
axios.get.mockResolvedValue(response);
fetchMissions();
render(<TestMissions />);

describe('Missions page', () => {
  it('gets elements', () => {
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
