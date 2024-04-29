import { useEffect, useState, useRef } from "react";

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
  const [timer, setTimer] = useState(60);
  const inputRef = useRef<HTMLInputElement>(null);
  let textUntypedColor = isLight ? "text-gray-500" : "text-gray-500";
  textUntypedColor += " transition-colors duration-500";
  let textTypedColor = isLight ? "text-black" : "text-white";
  textTypedColor += " transition-colors duration-500";

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
    }
  };

  const renderTextWithColoredLetter = () => {
    return content.split("").map((letter, index) => {
      const textColor = index < currIndex ? textTypedColor : textUntypedColor;
      const currLetter = "text-yellow-500";
      return (
        <span
          key={index}
          className={index === currIndex ? currLetter : textColor}
        >
          {letter}
        </span>
      );
    });
  };
  const timerClass = currIndex > 0 ? "visible" : "invisible";
  return (
    <div className="mx-20 px-20 mt-20 flex flex-col items-center">
      {timer > 0 && (
        <h1 className={`${timerClass} text-4xl font-mono text-yellow-600`}>
          {timer}
        </h1>
      )}
      {timer === 0 && (
        <h1 className="text-4xl font-mono text-yellow-600">{wordCount} WPM</h1>
      )}
      <input
        value=""
        onChange={(e) => trackTest(e.target.value)}
        ref={inputRef}
        className="opacity-0"
      />
      <article className={`text-2xl text-center`}>
        {renderTextWithColoredLetter()}
      </article>
    </div>
  );
};

export default TestContent;
