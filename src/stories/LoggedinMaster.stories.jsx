import { h } from 'preact';
import LoggedinMaster from '../components/LoggedinMaster';

export default {
  title: 'Pages/Logged In',
  component: LoggedinMaster,
};

const LoggedinTemplate = (args) => <><LoggedinMaster {...args} /></>;

export const Dashboard = LoggedinTemplate.bind({});
