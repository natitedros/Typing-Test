interface ContactProps {
  isLight: boolean;
}

const Contact: React.FunctionComponent<ContactProps> = (props) => {
  const isLight = props.isLight;
  const textColor = isLight ? "text-black" : "text-white";
  return (
    <div className={textColor + " mx-10 my-10"}>
      <h1 className="text-xl font-bold">Contact Us</h1>
      <p>This is the contact us page</p>
    </div>
  );
};

export default Contact;
