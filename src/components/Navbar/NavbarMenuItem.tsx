import Link from 'next/link';
import Icon from '../Icon/Icon';
import { IconName } from '../Icon/types/Icon';

export interface NavbarMenuItemProps {
  name: string;
  href: string;
  newTab?: boolean;
  icon?: IconName;
  onClick?: () => void;
}

function NavbarMenuItem({ name, href, icon, newTab, onClick }: NavbarMenuItemProps) {
  return (
    <li className="flex items-center cursor-pointer " onClick={onClick}>
      <Link
        href={href}
        className="flex items-center space-x-2 px-4 py-2 rounded-md text-white transition duration-200 hover:bg-white/5 max-lg:text-[14px]"
        onClick={onClick}
        target={newTab ? '_blank' : undefined}
      >
        {icon && (
          <Icon icon={icon} props={{ className: 'w-5 h-auto opacity-80' }} />
        )}
        <span className="lg:text-sm text-[12px] font-light capitalize">{name}</span>
      </Link>
    </li>
  );
}

export default NavbarMenuItem;
