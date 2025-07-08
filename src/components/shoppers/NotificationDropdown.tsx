import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useNotificationStore from "@/store/notificationStore";
import { AlertTriangle, CheckCircle, Inbox, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface UserDropdownMenuProps {
  children: React.ReactNode;
}

export function NotificationDropdown({ children }: UserDropdownMenuProps) {
  const { notifications, loading } = useNotificationStore();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 rounded-[20px] bg-transparent-white-300 p-4 backdrop-blur-md">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Group for Notifications */}
        <DropdownMenuGroup className="rounded-[10px] bg-white">
          {loading
            ? // Skeleton loader while notifications are loading
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex animate-pulse flex-row justify-between p-3"
                >
                  <div className="flex flex-row gap-[10px]">
                    {/* Placeholder for the icon */}
                    <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                    <div className="ml-2 flex flex-col gap-2">
                      {/* Placeholder for title */}
                      <div className="h-4 w-32 rounded bg-gray-300"></div>
                      {/* Placeholder for message */}
                      <div className="h-3 w-48 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              ))
            : notifications.map((notif) => (
                <DropdownMenuItem
                  key={notif._id}
                  onClick={() => router.push(`/notification/${notif._id}`)}
                  className="flex flex-row justify-between p-3"
                >
                  <div className="flex flex-row gap-[10px]">
                    {/* Icon selection based on notification type */}
                    {notif.type === "success" && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {notif.type === "warning" && (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    )}
                    {notif.type === "error" && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    {notif.type === "info" && (
                      <Inbox className="h-5 w-5 text-blue-500" />
                    )}

                    <div className="ml-2 flex flex-col">
                      <span className="font-medium">{notif.title}</span>
                      <span className="text-sm text-gray-600">
                        {notif.message}
                      </span>
                    </div>
                  </div>

                  {/* Show a dot for new notifications */}
                  <div className="h-[1rem] w-[1rem]">
                    {!notif.isRead && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-red-500" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Option to view all notifications */}
        <DropdownMenuItem>
          <span
            className="text-primary-100"
            onClick={() => router.push("/shoppers/notification")}
          >
            See All Notifications
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
