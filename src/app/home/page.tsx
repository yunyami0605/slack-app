import WritingButton from '@/components/button/WritingButton';
import MessageInput from '@/components/input/MessageInput';
import SearchInput from '@/components/input/SearchInput';
import CategoryToggleView from '@/components/view/CategoryView';
import ChannelView from '@/components/view/ChannelView';
import Header from '@/components/view/Header';
import MessageView from '@/components/view/MessageView';
import RecentSearchItem from '@/components/view/RecentSearchItem';
import TabView from '@/components/view/TabView';

function Home() {
  return (
    <div>
      <Header channelName="테스트채널" />

      <ChannelView name="스레드" />

      <CategoryToggleView name="채널" />

      <MessageView nickname="테스터1" content="컨텐트1" date="" />

      <TabView />

      <SearchInput />

      <WritingButton />

      <RecentSearchItem text="테스트 1234" />

      <MessageInput />
    </div>
  );
}

export default Home;
