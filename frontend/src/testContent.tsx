interface TestContentProps {
  paragraph: string;
  isLightThemed: boolean;
}

const TestContent: React.FunctionComponent<TestContentProps> = (props) => {
  const paragraph = props.paragraph;
  const isLight = props.isLightThemed;

  let textColor = isLight ? "text-black" : "text-gray-400";
  textColor += " transition-colors duration-500";

  const content = paragraph.slice(0, Math.min(paragraph.length, 1000));
  return (
    <div className="mx-20 px-20 mt-20">
      <article className={`${textColor} text-2xl`}>{content}</article>
    </div>
  );
};

export default TestContent;
