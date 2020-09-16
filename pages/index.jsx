import React from "react";
import Main from "../containers/Layouts/Main/Main";
import PageName from '../components/PageName/PageName';
import CardCounter from '../components/CardCounter/CardCounter';
import FeatureBox from '../containers/FeatureBox/FeatureBox';
import LatestPost from '../components/LatestPost/LatestPost';
import Chart from '../components/Chart/Chart';

const latestPostData = {
  title: "How to use React Hooks",
  img: "/img/reactjs.png",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus iusto ut tempora repellat assumenda temporibus tenetur quisquam, harum unde hic, doloremque ipsa suscipit, accusantium ipsam beatae eligendi quos adipisci! Delectus architecto quae sit dolorum laborum tempora porro maiores quibusdam reprehenderit qui rem eius distinctio sint recusandae culpa, nemo facere"
}

const chartData = {
  labels: ['Budi', 'Edo', 'Hendrik',
    'Meilinda', 'Boby'],
  datasets: [
    {
      label: 'Posts',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
      ],
      data: [81, 80, 65, 59, 51]
    }
  ]
}


const Home = () => (
  <Main title="POROS Admin | Dashboard">
    <div className="mb-12">
      <PageName pageName="Dashboard" inclUser username="James" />
    </div>

    <div className="flex flex-col md:inline-grid md:grid-rows-1 md:grid-cols-3 mb-12 justify-between md:mb-20">
      <div className="mb-2 md:mr-4">
        <CardCounter total={123} itemName="Posts" containerColor="yellow" containerColorValue="400" textColor="green" textColorValue="600" />
      </div>
      <div className="mb-2 md:mr-4">
        <CardCounter total={456} itemName="Projects" containerColor="green" containerColorValue="400" textColor="green" textColorValue="900" />
      </div>
      <div>
        <CardCounter total={78} itemName="Achievements" containerColor="green" containerColorValue="900" textColor="yellow" textColorValue="500" />
      </div>
    </div>

    <div className="xl:inline-grid xl:grid-rows-1 xl:grid-cols-2">
      <div className="mb-12 xl:mr-16">
        <FeatureBox featureTitle="Latest Post">
          <LatestPost img={latestPostData.img} title={latestPostData.title} desc={latestPostData.desc} />
        </FeatureBox>
      </div>

      <div className="mb-12">
        <FeatureBox featureTitle="Most Active Users">
          <Chart data={chartData} />
        </FeatureBox>
      </div>
    </div>

  </Main>
);

export default Home;
