import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScoreBadge = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      fontSize={"14px"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScoreBadge;
