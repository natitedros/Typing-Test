interface AboutProps {
  isLight: boolean;
}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const isLight = props.isLight;
  const textColor = isLight ? "text-black" : "text-white";
  return (
    <div className={textColor + " mx-10 my-10"}>
      <h1 className="font-bold text-xl">About Page</h1>
      <p>We are doing this project for fun</p>
    </div>
  );
};

export default About;
