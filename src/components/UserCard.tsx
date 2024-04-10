import { UserDetails } from "@/pages";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

interface UserCardProps {
  userDetails: UserDetails;
  onEdit: () => void;
}

export const UserCard = ({ userDetails, onEdit }: UserCardProps) => {
  return (
    <Card maxW="xs" my={2}>
      <CardBody>
        <Flex direction="column">
          <Flex gap="4" alignItems="center">
            <Avatar name={userDetails.userName} />
            <Box>
              <Heading size="sm">{userDetails.userName}</Heading>
              <Text>{userDetails.jobTitle}</Text>
            </Box>
          </Flex>
          <Button
            variant="outline"
            colorScheme="grey"
            aria-label="Edit"
            size="xs"
            maxW={24}
            mt={4}
            onClick={() => onEdit()}
          >
            Edit details
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};
