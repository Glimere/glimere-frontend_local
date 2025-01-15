import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CustomDialogProps {
  trigger: ReactNode; // Trigger for opening the dialog
  children: ReactNode; // Content inside the dialog
  triggerState?: boolean
  setTriggerState?: any
}

const CustomDialog: React.FC<CustomDialogProps> = ({ trigger, children, triggerState, setTriggerState }) => {
  return (
    <Dialog open={triggerState} onOpenChange={setTriggerState}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
