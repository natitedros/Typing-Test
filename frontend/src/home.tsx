import TestContent from "./testContent";
import useFetch from "./useFetch";

interface HomeProps {
  isLightThemed: boolean;
}
interface DefinitionModel {
  definition: string;
  word: string;
  valid: boolean;
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const isLightThemed = props.isLightThemed;

  const sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const words = [
    "abate",
    "bellicosity",
    "confound",
    "abstruse",
    "bane",
    "crave",
  ];

  // const { data, isPending, error } = useFetch<DefinitionModel>(
  //   "https://api.api-ninjas.com/v1/dictionary?word=" + words[0]
  // );

  return (
    <div className="flex items-center justify-center">
      {/* {data && ( */}
      <TestContent
        // paragraph={data.definition}
        paragraph={sample}
        isLightThemed={isLightThemed}
      />
      {/* )} */}
      {/* {isPending && <p className="text-4xl">...</p>} */}
    </div>
  );
};

export default Home;
