import { useEffect, useState } from "react";

interface TestContentProps {
  paragraph: string;
  isLightThemed: boolean;
}

const TestContent: React.FunctionComponent<TestContentProps> = (props) => {
  const paragraph = props.paragraph;
  const content = paragraph.slice(0, Math.min(paragraph.length, 1000));
  const isLight = props.isLightThemed;
  const [currIndex, setCurrIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(10);
  let textColor = isLight ? "text-gray-600" : "text-gray-400";
  textColor += " transition-colors duration-500";

  const timerFunction = () => {
    const intervalTimer = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalTimer);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalTimer);
    };
  };
  const trackTest = (char: string) => {
    if (char === content[currIndex]) {
      if (char === " ") {
        setWordCount(wordCount + 1);
      }
      setCurrIndex(currIndex + 1);
      if (currIndex === 1) {
        timerFunction();
      }
      console.log("yesss");
    } else {
      console.log("char: " + char);
      console.log("current Letter: " + content[currIndex]);
      console.log(currIndex);
      console.log(content.slice(currIndex, currIndex + 10));
      console.log("noooo");
    }
  };

  const renderTextWithColoredLetter = () => {
    return content.split("").map((letter, index) => {
      return (
        <span
          key={index}
          className={index === currIndex ? "text-yellow-500" : textColor}
        >
          {letter}
        </span>
      );
    });
  };
  const timerClass = currIndex > 0 ? "visible" : "invisible";
  return (
    <div className="mx-20 px-20 mt-20 flex flex-col items-center">
      <h1 className={timerClass}>{timer}</h1>
      <input value="" onChange={(e) => trackTest(e.target.value)} />
      <article className={`${textColor} text-2xl`}>
        {renderTextWithColoredLetter()}
      </article>
    </div>
  );
};

export default TestContent;
