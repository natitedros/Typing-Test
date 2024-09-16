interface ServicesProps {
  isLight: boolean;
}

const Services: React.FunctionComponent<ServicesProps> = (props) => {
  const isLight = props.isLight;
  const textColor = isLight ? "text-black" : "text-white";
  return (
    <div className={textColor + " mx-10 my-10"}>
      <h1 className="text-xl font-bold">Services</h1>
      <p>This is the services page.</p>
    </div>
  );
};

export default Services;
