import SyllabusStepper from "../../components/ui/stepper/SyllabusStepper";
import LabTab from "../../components/ui/tab";

const CreateSyllabusPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        margin: "0 0 0 0",
      }}
    >
      <SyllabusStepper />
      <LabTab />
    </div>
  );
};

export default CreateSyllabusPage;
