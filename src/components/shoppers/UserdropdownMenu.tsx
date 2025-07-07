import { Button } from "@/components/ui/button";
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
import {
  CreditCard,
  LogIn,
  LogOut,
  PlusCircle,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserDropdownMenuProps {
  children: React.ReactNode;
}

export function UserDropdownMenu({ children }: UserDropdownMenuProps) {
  const navMenu = [
    {
      name: "My Account",
      icon: <User className="text-primary-100" />,
      link: "/profile",
    },
    {
      name: "Orders",
      icon: <CreditCard className="text-primary-100" />,
      link: "/orders",
    },
    {
      name: "Wishlist",
      icon: <PlusCircle className="text-primary-100" />,
      link: "/wishlist",
    },
    {
      name: "Settings",
      icon: <Settings className="text-primary-100" />,
      link: "/settings",
    },
  ];

  const { isAuthenticated, logout } = useUserStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/shoppers");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-[20px] bg-transparent-white-300 p-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Account-related items */}
        <DropdownMenuGroup className="rounded-[10px] bg-white">
          {navMenu.map((item) => {
            if (
              ["My Account", "Settings"].includes(item.name) &&
              !isAuthenticated
            ) {
              return null; // Hide "My Account" and "Settings" if not authenticated
            }

            return (
              <DropdownMenuItem key={item.name} asChild>
                <Link href={item.link} className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Login or Logout */}
        <DropdownMenuGroup>
          {isAuthenticated ? (
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              <span className="text-red-500">Log out</span>
            </DropdownMenuItem>
          ) : (
            <Link href="/auth/shoppers/login" passHref>
              <DropdownMenuItem>
                <Button className="flex w-full flex-row gap-[10px] bg-primary-100 py-[2px] text-white">
                  <LogIn />
                  <span>Login</span>
                </Button>
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
