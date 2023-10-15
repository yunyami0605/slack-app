import {IconChat} from '@/icons/IconChat';
import {IconHome} from '@/icons/IconHome';
import {IconSearch} from '@/icons/IconSearch';
import {IconUser} from '@/icons/IconUser';
import Tab from '../tab/Tab';
import React from 'react';

const tabs = [
  {
    icon: <IconHome />,
    name: '홈',
  },

  {
    icon: <IconChat />,
    name: 'DM',
  },

  {
    icon: <IconSearch />,
    name: '검색',
  },

  {
    icon: <IconUser />,
    name: '계정',
  },
];

/**
 *@description 탭 리스트 뷰
 */
interface Props {}
function TabView({}: Props) {
  return (
    <section className="space-between view-px pt-[10px] pb-[20px] border-t-gray-4 border-t-[1px]">
      {tabs.map(item => (
        <React.Fragment key={item.name}>
          <Tab name={item.name} icon={item.icon} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default TabView;
