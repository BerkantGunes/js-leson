
import Header from '../components/Header/Header';
import StatisticCard from '../components/statistic/StatisticCard';
import { Area } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';

const StatisticPage = () => {

  const data = [
    { year: '1991', value: 8 },
    { year: '1992', value: 9 },
    { year: '1993', value: 9.1 },
    { year: '1994', value: 9.3 },
    { year: '1995', value: 12 },
    { year: '1996', value: 12.9 },
    { year: '1997', value: 12.9 },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
    },
    line: {
      style: {
        stroke: 'darkgreen',
        lineWidth: 2,
      },
    },
    point: {
      sizeField: 4,
      style: {
        stroke: 'darkgreen',
        fill: '#fff',
      },
    },
  };

  const config2 = {
    data: [
      { type: 'category1', value: 27 },
      { type: 'category2', value: 25 },
      { type: 'category3', value: 18 },
      { type: 'category4', value: 15 },
      { type: 'category5', value: 10 },
      { type: 'category6', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'AntV\nCharts',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return (
    <>
        <Header />
        <div className="px-6 md:pb-0 pb-20">
            <h1 className='text-4xl font-bold text-center mb-4'>Statistics</h1>
            <div className='statistic-section'>
                <h2 className='text-lg'>Welcome <span className='text-green-700 font-bold text-xl'>Admin.</span></h2>
                <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
                    <StatisticCard title={"Total Customers"} amount={"302"} img={"images/user.png"} />
                    <StatisticCard title={"Total Revenue"} amount={"2.886.294 $"} img={"images/money.png"} />
                    <StatisticCard title={"Total Sell"} amount={"313.816"} img={"images/sale.png"}/>
                    <StatisticCard title={"Total Products"} amount={"188"} img={"images/product.png"} />
                </div>
                <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
                    <div className='lg:w-1/2 lg:h-full'><Area {...config} /></div>
                    <div className='lg:w-1/2 lg:h-full'><Pie {...config2} /></div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default StatisticPage;