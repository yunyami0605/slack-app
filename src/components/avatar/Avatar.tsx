/**
 *@description 사용자 프로필, 회사 프로필 컴포넌트
 */

interface Props {
  size: 'large' | 'small';
}
function Avatar({size}: Props) {
  const avatarSize =
    size === 'large' ? 'w-[44px] h-[44px] ' : 'w-[35px] h-[35px] ';
  return (
    <div className={avatarSize + 'rounded-[8px] bg-gray-4 center'}>
      <p className="text-4 font-weight text-gray-0">팜</p>
    </div>
  );
}

export default Avatar;
