import {IconMenu} from '@/icons/IconMenu';
import Avatar from '../avatar/Avatar';

interface Props {
  channelName: string;
}

function Header({channelName}: Props) {
  return (
    <header className="space-between view-px h-[60px]">
      <div className="space-between space-x-4">
        <Avatar size="small" />

        <p className="text-4 font-bold">{channelName}</p>
      </div>

      <div className="center w-[32px] h-[32px]">
        <IconMenu />
      </div>
    </header>
  );
}

export default Header;
