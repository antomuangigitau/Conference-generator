interface TicketTypeProps {
  ticketType: string;
  ticketPrice: string;
  ticketIssued: string;
}

const ticketData: TicketTypeProps[] = [
  {
    ticketPrice: "Free",
    ticketType: "Regular Access",
    ticketIssued: "20/52",
  },
  {
    ticketPrice: "$150",
    ticketType: "VIP Access",
    ticketIssued: "20/52",
  },
  {
    ticketPrice: "$150",
    ticketType: "VVIP Access",
    ticketIssued: "20/52",
  },
];

const TicketType = () => {
  return (
    <div className="text-white">
      <h3>Select Ticket Type: </h3>
      <div className="flex flex-col md:flex-row border border-[#0E464F] w-full rounded-3xl p-3.5  gap-2.5 justify-between mt-2.5">
        {ticketData.map((ticket, index) => (
          <div
            key={index}
            className={`border rounded-2xl p-2.5 border-[#197686] flex-1 ${
              index === 0 ? "bg-[#12464E]" : ""
            }`}>
            <p className="text-3xl">{ticket.ticketPrice}</p>
            <p className="tracking-widest text-[18px] text-grey-98">
              {ticket.ticketType}
            </p>
            <p className="text-grey-98">{ticket.ticketIssued}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketType;
