import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TicketAmout = () => {
  return (
    <div className="mt-7">
      <h3 className="text-white mb-1">Number Of Tickets</h3>
      <div>
        <Select>
          <SelectTrigger className="w-full text-white border border-[#0E464F] rounded-3xl focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TicketAmout;
