import FileUploader from "./components/FileUploader";
import ProgressContainer from "./components/ProgressContainer";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Mail } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import Buttons from "./components/Buttons";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAttendeeDetailsStore } from "./store";
import { AttendeeDetailsFormData, attendeeDetailsSchema } from "./Schema";

interface AttendeeDetailsProps {
  nextStep: () => void;
  prevStep: () => void;
}

const AttendeeDetails = ({ nextStep, prevStep }: AttendeeDetailsProps) => {
  const { formData, setFormData } = useAttendeeDetailsStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AttendeeDetailsFormData>({
    resolver: zodResolver(attendeeDetailsSchema),
    defaultValues: formData,
  });

  const handleFileUpload = (fileUrl: string) => {
    setValue("profilePhotoUrl", fileUrl);
  };

  const onSubmit: SubmitHandler<AttendeeDetailsFormData> = (data) => {
    setFormData(data);
    nextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-none sm:border sm:border-[#0E464F] w-full mt-4 rounded-3xl p-4">
        <div className="border border-[#0E464F] w-full rounded-2xl py-9 px-4">
          <h3 className="text-white">Upload Profile Photo</h3>
          <div className="bg-transparent h-[200px] w-full sm:bg-[#052228] relative mt-5">
            <FileUploader onFileUpload={handleFileUpload} />
          </div>
        </div>
        {errors.profilePhotoUrl && (
          <p className="text-red-500">{errors.profilePhotoUrl.message}</p>
        )}
        <ProgressContainer />
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-white" htmlFor="name">
            Enter your name
          </Label>
          <div className="border border-[#0E464F] rounded-sm">
            <Input
              className="border-none outline-transparent text-white"
              id="name"
              placeholder="John Doe"
              {...register("name")}
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5 my-6">
          <Label className="text-white" htmlFor="email">
            Enter your email
          </Label>
          <div className="border border-[#0E464F] rounded-sm flex items-center gap-0.5 px-3">
            <Mail color="white" size={24} />
            <Input
              className="border-none outline-transparent text-white"
              id="email"
              placeholder="johndoe@gmail.com"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid w-full gap-1.5">
          <Label className="text-white" htmlFor="message">
            Special request?
          </Label>
          <Textarea
            className="border border-[#0E464F]"
            placeholder="Textarea"
            id="message"
            {...register("specialRequest")}
          />
          {errors.specialRequest && (
            <p className="text-red-500">{errors.specialRequest.message}</p>
          )}
        </div>
        <div className="flex gap-2.5 flex-col-reverse sm:flex-row sm:gap-8 mt-7">
          <Buttons
            variant="cancel"
            className="flex-1 border border-[#24A0B5]"
            onClick={prevStep}>
            Back
          </Buttons>
          <Buttons type="submit" variant="next" className="flex-1">
            Get My Free Ticket
          </Buttons>
        </div>
      </div>
    </form>
  );
};

export default AttendeeDetails;
