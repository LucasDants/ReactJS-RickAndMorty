import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="white"
        disabled
        _disabled={{
          bg: "yellow.400",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="cyan.500"
      color="white"
      _hover={{
        bg: "pink.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
