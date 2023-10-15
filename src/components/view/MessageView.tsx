import Avatar from '../avatar/Avatar';

/**
 *@description 채팅 메세지 뷰
 *@param isModified  -  수정여부
 */
interface Props {
  nickname: string;
  date: string;
  isModified?: boolean;
  content: string;
}
function MessageView({nickname, date, isModified, content}: Props) {
  return (
    <div className="flex view-p">
      <div className="mr-5">
        <Avatar size="large" />
      </div>

      <div>
        <div className="flex align-bottom">
          <p className="mr-2 font-bold text-4 text-gray-2">{nickname}</p>

          <p className="text-3.5 font-normal text-gray-4">오전 01:38</p>
        </div>

        <div>
          <p className="text-4 font-normal text-gray-2">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageView;
