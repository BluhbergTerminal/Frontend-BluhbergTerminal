import Title from 'antd/lib/typography/Title';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Test A', uv: 400, pv: 2400, amt: 2400} ];


export default function HomePage() {
  return <>
  <Title level="1">Cooler Graph</Title>
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart></>;
}