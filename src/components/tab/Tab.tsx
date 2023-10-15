/**
 *@description 하단 탭바 컴포넌트
 */
interface Props {
  icon: React.ReactElement;
  name: string;
}
function Tab({icon, name}: Props) {
  return (
    <div className="column space-y-4">
      {icon}

      <p className="font-bold text-3.5">{name}</p>
    </div>
  );
}

export default Tab;
