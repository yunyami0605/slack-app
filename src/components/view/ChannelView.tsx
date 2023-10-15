import {IconHash} from '@/icons/IconHash';

/**
 *@description 채팅 내용이 있는 곳 = 채널뷰
 */
interface Props {
  name: string;
}
function ChannelView({name}: Props) {
  return (
    <div className="view-p">
      <div className="row">
        <div className="mr-3">
          <IconHash />
        </div>

        <p className="text-[16px] text-gray-4 font-bold">{name}</p>
      </div>
    </div>
  );
}

export default ChannelView;
