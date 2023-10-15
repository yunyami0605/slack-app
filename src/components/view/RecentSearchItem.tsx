import {IconCancel} from '@/icons/IconCancel';
import {IconClock} from '@/icons/IconClock';

/**
 *@description 최근 검색 아이템
 */
interface Props {
  text: string;
}
function RecentSearchItem({text}: Props) {
  return (
    <div className="space-between py-[12px]">
      <div className="row">
        <div className="mr-[13px]">
          <IconClock />
        </div>

        <p>{text}</p>
      </div>

      <div>
        <IconCancel />
      </div>
    </div>
  );
}

export default RecentSearchItem;
