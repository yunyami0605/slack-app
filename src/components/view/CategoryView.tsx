import {IconUpperArrow} from '@/icons/IconUpperArrow';

/**
 *@description 카테고리 색션 토글 뷰
 */
interface Props {
  name: string;
}
function CategoryToggleView({name}: Props) {
  return (
    <div className="space-between view-p border-t-gray-4 border-t-[1px]">
      <p>{name}</p>

      <div>
        <IconUpperArrow />
      </div>
    </div>
  );
}

export default CategoryToggleView;
