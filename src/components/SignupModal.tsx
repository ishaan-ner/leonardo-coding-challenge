import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FormEventHandler } from "react";
import { UserDetails } from "../pages";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  setUserDetails: (userDetails: UserDetails) => void;
}

export const SignupModal = ({
  isOpen,
  onClose,
  setUserDetails,
}: SignupModalProps) => {
  const handleSignup: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userDetails = Object.fromEntries(formData);
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    setUserDetails(userDetails as UserDetails);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter your details</ModalHeader>
        <ModalBody>
          <Stack spacing={3}>
            <form onSubmit={handleSignup}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  name="userName"
                  variant="outline"
                  placeholder="John Doe"
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Job Title</FormLabel>
                <Input name="jobTitle" placeholder="Visual Artist" />
              </FormControl>
              <Button
                mt={8}
                mb={4}
                width="full"
                type="submit"
                colorScheme="blue"
              >
                Sign Up
              </Button>
            </form>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
