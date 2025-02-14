import Buttons from "./Buttons";
import ProgressContainer from "./ProgressContainer";
import TicketAmout from "./TicketAmout";
import TicketInfo from "./TicketInfo";
import TicketType from "./TicketType";

const TicketSelection = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <div className="border-none rounded-3xl sm:border sm:border-[#0E464F] w-full mt-4">
      <TicketInfo />
      <ProgressContainer />
      <TicketType />
      <TicketAmout />
      <div className="flex gap-2.5 flex-col-reverse sm:flex-row sm:gap-8 mt-7">
        <Buttons variant="cancel" className="flex-1 border border-[#24A0B5]">
          Cancel
        </Buttons>
        <Buttons onClick={nextStep} variant="next" className="flex-1">
          Next
        </Buttons>
      </div>
    </div>
  );
};

export default TicketSelection;
