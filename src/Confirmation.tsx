import Buttons from "./components/Buttons";
import { useAttendeeDetailsStore } from "./store";

const Confirmation = () => {
  const attendeeDetails = useAttendeeDetailsStore((state) => state.formData);
  return (
    <div className="px-2 text-center text-white md:px-14">
      <h1 className="text-[32px]">Your Ticket is Booked!</h1>
      <p>
        <span className="text-grey-98">
          Check your email for a copy or you can{" "}
        </span>
        download
      </p>
      <div className="p-2 border-none md:border md:border-[#0E464F] w-full rounded-3xl mt-4 md:p-10">
        <div className="border border-[#0E464F] w-full rounded-3xl p-2">
          <h3 className="text-4xl text-center font-road-rage-regular font-normal text-white sm:text-[62px]">
            Techember Fest " 25
          </h3>
          <p className="text-white text-center font-roboto flex flex-col sm:flex-row justify-center items-center gap-2">
            <span className="text-sm">📍Thika, Kenya</span>
            <span className="hidden sm:block">| |</span>
            <span>March 15, 2025 | 7.00PM</span>
          </p>
          <div className="flex justify-center items-center my-10">
            <div className="w-[140px] h-[140px] border-4 border-[#24A0B5] rounded-3xl">
              <img
                src={attendeeDetails.profilePhotoUrl}
                alt="profile photo"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch font-roboto p-1 rounded-xl border-[#133D44] border bg-[rgb(8,52,60)]">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2 border-b-[#12464E] border-b self-stretch">
                <div className="flex flex-col p-[4px] items-start justify-center border-r-[#12464E] border-r">
                  <p className="text-grey-98 text-lg">Name</p>
                  <p className="text-white text-xs font-bold">
                    {attendeeDetails.name}
                  </p>
                </div>
                <div className="flex flex-col p-[4px] items-start justify-center border-r-[#12464E] border-r">
                  <p className="text-grey-98 text-lg">Email</p>
                  <p className="text-white text-xs font-bold">
                    {attendeeDetails.email}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-b-[#12464E] border-b">
                <div className="flex flex-col p-[4px] items-start justify-center border-r-[#12464E] border-r">
                  <p className="text-grey-98 text-lg">Ticket Type</p>
                  <p className="text-white text-xs font-bold">vvip</p>
                </div>
                <div className="flex flex-col p-[4px] items-start justify-center border-r-[#12464E] border-r">
                  <p className="text-grey-98 text-lg">Ticket for</p>
                  <p className="text-white text-xs font-bold">1</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-1 items-start justify-start">
              <p className=" text-grey-98 text-xs text-start">
                Special request
              </p>
              <p className="text-white text-xs text-start min-h-[45px]">Nil</p>
            </div>
          </div>
          <div className="my-10 border-2 border-dashed border-[#12464E]"></div>
        </div>
      </div>
      <div className="flex gap-2.5 flex-col-reverse sm:flex-row sm:gap-8 mt-7">
        <Buttons variant="cancel" className="flex-1 border border-[#24A0B5]">
          Book Another Ticket
        </Buttons>
        <Buttons variant="next" className="flex-1">
          Download Ticket
        </Buttons>
      </div>
    </div>
  );
};

export default Confirmation;
