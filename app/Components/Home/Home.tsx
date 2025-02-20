interface HomeProps {
  NavTab: string;
}

const Home: React.FC<HomeProps> = ({ NavTab }) => {
  return <div>1{NavTab}</div>;
};

export default Home;
