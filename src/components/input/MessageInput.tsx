import {IconPlus} from '@/icons/IconPlus';

/**
 *@description 채팅 입력 인풋
 */
function MessageInput() {
  return (
    <div className="pt-[14px] view-px pb-[20px] flex border-gray-5 border-t-[1px]">
      <div className="mr-[12px]">
        <IconPlus />
      </div>

      <input
        placeholder="테스터1에(게) 메세지 보내기"
        className="text-gray-4 text-4 font-normal bg-transparent"
      />
    </div>
  );
}

export default MessageInput;
