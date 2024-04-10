import {
  Button,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Image from "next/image";

interface AnimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAnime: any;
}

export const AnimeModal = ({
  isOpen,
  onClose,
  currentAnime,
}: AnimeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{currentAnime.title.romaji}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            width={60}
            height={60}
            alt={currentAnime.title.romaji}
            src={currentAnime.coverImage.medium}
          />
          <List>
            <ListItem>Episodes: {currentAnime.episodes}</ListItem>
            <ListItem>Status: {currentAnime.status}</ListItem>
            <ListItem>Format: {currentAnime.format}</ListItem>
          </List>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
