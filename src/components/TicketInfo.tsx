const TicketInfo = () => {
  return (
    <div className="border border-[#0E464F] w-full rounded-3xl p-2">
      <h3 className="text-4xl text-center font-road-rage-regular font-normal text-white sm:text-[62px]">
        Techember Fest " 25
      </h3>
      <p className="text-sm sm:text-[18px] text-white text-center font-roboto mb-6">
        Join us for an unforgettable experience at
        <br />
        REACTDEV KE! Secure your spot now.
      </p>
      <p className="text-white text-center font-roboto flex flex-col sm:flex-row justify-center items-center gap-2">
        <span className="text-sm">📍Thika, Kenya</span>
        <span className="hidden sm:block">| |</span>
        <span>March 15, 2025 | 7.00PM</span>
      </p>
    </div>
  );
};

{
  /* <span>| |</span> <span>March 15, 2025</span>{" "}
        | <span>7.00PM</span> */
}
export default TicketInfo;
