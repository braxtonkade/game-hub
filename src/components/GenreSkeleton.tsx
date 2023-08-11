import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack paddingY={5}>
      <SkeletonCircle size="6" />
      <SkeletonText noOfLines={1} skeletonHeight="4" width={"150px"} />
    </HStack>
  );
};

export default GenreSkeleton;
