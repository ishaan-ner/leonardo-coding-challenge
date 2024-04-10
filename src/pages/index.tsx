import {
  Box,
  Button,
  Center,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SignupModal } from "../components/SignupModal";
import { UserCard } from "@/components/UserCard";
import { Link } from "@chakra-ui/next-js";

export type UserDetails = {
  userName: string;
  jobTitle: string;
};

export default function Home() {
  const [userDetails, setUserDetails] = useState<{
    userName: string;
    jobTitle: string;
  }>();
  const { isOpen, onOpen: openSignupModal, onClose } = useDisclosure();

  // Persist user details between reloads
  useEffect(() => {
    const storedDetails = sessionStorage.getItem("userDetails");
    if (!storedDetails) {
      return openSignupModal();
    }
    setUserDetails(JSON.parse(storedDetails));
  }, [openSignupModal]);

  return (
    <Box w="100%" alignItems="start" p={4}>
      {userDetails && (
        <UserCard onEdit={openSignupModal} userDetails={userDetails} />
      )}

      <Link href={"/information/1"}>Go to information page</Link>

      <SignupModal
        isOpen={isOpen}
        onClose={onClose}
        setUserDetails={setUserDetails}
      />
    </Box>
  );
}
