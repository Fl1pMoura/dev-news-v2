import Header from "./_components/header";
import PageContainer from "./_components/page-container";
import {
  PostsContainer,
  PostsContainerContent,
  PostsContainerItem,
  PostsContainerItemDate,
  PostsContainerItemDescription,
  PostsContainerItemImage,
  PostsContainerItemTags,
  PostsContainerItemTitle,
  PostsContainerTitle,
} from "./_components/posts-container";

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <PostsContainer>
        <PostsContainerTitle>Recent blog posts</PostsContainerTitle>
        <PostsContainerContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) =>
            index === 0 ? (
              <PostsContainerItem className="col-span-2 row-span-2" key={index}>
                <div className="relative w-full h-48">
                  <PostsContainerItemImage
                    image="https://lipsum.app/random/1600x900"
                    alt="Recent blog post 1"
                  />
                </div>
                <PostsContainerItemDate>2025-01-01</PostsContainerItemDate>
                <PostsContainerItemTitle>
                  Recent blog post 1
                </PostsContainerItemTitle>
                <PostsContainerItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </PostsContainerItemDescription>
                <PostsContainerItemTags tags={["tag1", "tag2", "tag3"]} />
              </PostsContainerItem>
            ) : (
              <PostsContainerItem key={index}>
                <div className="relative w-full h-48">
                  <PostsContainerItemImage
                    image="https://lipsum.app/random/1600x900"
                    alt="Recent blog post 1"
                  />
                </div>
                <PostsContainerItemDate>2025-01-01</PostsContainerItemDate>
                <PostsContainerItemTitle>
                  Recent blog post 1
                </PostsContainerItemTitle>
                <PostsContainerItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </PostsContainerItemDescription>
                <PostsContainerItemTags tags={["tag1", "tag2", "tag3"]} />
              </PostsContainerItem>
            ),
          )}
        </PostsContainerContent>
      </PostsContainer>
    </PageContainer>
  );
};

export default Home;
