interface TestContentProps {
  paragraph: string;
  isLightThemed: boolean;
}

const TestContent: React.FunctionComponent<TestContentProps> = (props) => {
  const paragraph = props.paragraph;
  const isLight = props.isLightThemed;

  const textColor = isLight ? "text-black" : "text-gray-400";
  return (
    <div className="mx-20 px-20 mt-20">
      <article className={`${textColor} text-2xl`}>{paragraph}</article>
    </div>
  );
};

export default TestContent;
