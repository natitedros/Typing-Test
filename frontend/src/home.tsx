interface HomeProps {
  isLightThemed: boolean;
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const isLightThemed = props.isLightThemed;
  const bgColor = isLightThemed ? "bg-white" : "bg-gray-800";
  const textColor = isLightThemed ? "text-black" : "text-gray-400";
  return (
    <div className={`${bgColor} h-screen`}>
      <h1 className={`text-2xl ${textColor}`}>Home Page</h1>
    </div>
  );
};

export default Home;
