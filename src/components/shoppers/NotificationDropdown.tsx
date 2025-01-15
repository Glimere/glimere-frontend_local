  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
 
    DropdownMenuSeparator,
 
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import useUserStore from "@/store/userStore";
  import Link from "next/link";
  import { useRouter } from "next/navigation";
  import { Inbox, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

  interface Notification {
    id: string;
    heading: string;
    message: string;
    type: "warning" | "info" | "success" | "error"; // Notification types
    isRead: boolean; // Flag to check if notification is new
  }
  
  const notifications: Notification[] = [
    {
      id: "1",
      heading: "New Order Placed",
      message: "You have a new order from John Doe.",
      type: "success",
      isRead: true,
    },
    {
      id: "2",
      heading: "Payment Failed",
      message: "Your payment attempt was unsuccessful.",
      type: "error",
      isRead: true,
    },
    {
      id: "3",
      heading: "Discount Offer",
      message: "Special discount on selected items just for you!",
      type: "info",
      isRead: false,
    },
    {
      id: "4",
      heading: "Product Back in Stock",
      message: "The item you wanted is now back in stock.",
      type: "success",
      isRead: false,
    },
  ];
  
  interface UserDropdownMenuProps {
    children: React.ReactNode;
  }
  
  export function NotificationDropdown({ children }: UserDropdownMenuProps) {

    const router = useRouter()
  
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
         {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 bg-transparent-white-300 rounded-[20px] p-4">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Group for Notifications */}
          <DropdownMenuGroup className="bg-white rounded-[10px]">
            {notifications.map((notif) => (
              <DropdownMenuItem key={notif.id}
              onClick={()=> router.push(`/notification/${notif.id}`)}
              className="flex flex-row justify-between"
              >
                <div className="flex flex-row gap-[10px]">
                   {/* Icon selection based on notification type */}
                {notif.type === "success" && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {notif.type === "warning" && (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                )}
                {notif.type === "error" && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                {notif.type === "info" && (
                  <Inbox className="w-5 h-5 text-blue-500" />
                )}

                <div className="ml-2 flex flex-col">
                  <span className="font-medium">{notif.heading}</span>
                  <span className="text-sm text-gray-600">
                    {notif.message}
                  </span>
                </div> 
                </div>
                

                {/* Show a dot for new notifications */}
                <div className="w-[1rem] h-[1rem]">
                  {notif.isRead && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-red-500" />
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          {/* Option to view all notifications */}
          <DropdownMenuItem>
            <span className="text-primary-100"
            onClick={()=> router.push("/shoppers/notification")}
            >
              See All Notifications
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
