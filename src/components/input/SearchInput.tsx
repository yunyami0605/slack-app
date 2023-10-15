import {IconSearch} from '@/icons/IconSearch';

/**
 *@description 검색 입력 인풋
 */

function SearchInput() {
  return (
    <section className="row px-[16px] py-[11px] bg-gray-5 rounded-[8px]">
      <div className="mr-3">
        <IconSearch />
      </div>

      <input
        className="bg-transparent text-gray-2 text-4"
        placeholder="메시지 및 파일 검색"
      />
    </section>
  );
}

export default SearchInput;
