import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const PostsContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="mt-8">{children}</section>;
};

export const PostsContainerTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h2 className="font-bold text-xl mb-8">{children}</h2>;
};

export const PostsContainerContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const PostsContainerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const PostsContainerItemTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h3 className="font-bold text-lg mb-2">{children}</h3>;
};

export const PostsContainerItemContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-gray-500">{children}</p>;
};

export const PostsContainerItemImage = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) => {
  return <Image src={image} alt={alt} fill className="object-cover" />;
};

export const PostsContainerItemDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-gray-500">{children}</p>;
};

export const PostsContainerItemDate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-gray-500">{children}</p>;
};

export const PostsContainerItemTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Badge variant="outline" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};
