import createApolloClient from "@/apollo-client";
import { AnimeModal } from "@/components/AnimeModal";
import { gql } from "@apollo/client";
import { Link } from "@chakra-ui/next-js";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";

const animeQuery = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          romaji
        }
        episodes
        status
        format
        coverImage {
          medium
        }
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = createApolloClient();
  const currentPage = params?.pageNumber?.[0] || 1;

  const { data } = await client.query({
    query: animeQuery,
    variables: {
      page: currentPage,
      perPage: 6,
    },
  });

  return {
    props: {
      anime: data.Page,
    },
  };
};

export default function Information(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAnimeId, setSelectedAnimeId] = useState("");

  const { media, pageInfo } = props.anime;

  return (
    <Box w="100%" alignItems="start" p={4}>
      <Link href="/">Back to home</Link>
      <SimpleGrid mt={4} columns={{ sm: 1, md: 2 }} gap={8} maxWidth="600px">
        {media.map((anime: any) => (
          <Card
            maxW="200px"
            key={anime.id}
            onClick={() => {
              setSelectedAnimeId(anime.id);
              onOpen();
            }}
            cursor={"pointer"}
          >
            <CardBody>
              <Image
                width={60}
                height={60}
                alt={anime.title.romaji}
                src={anime.coverImage.medium}
              />
              <Stack mt="6" spacing="3">
                <Text fontSize="sm">{anime.title.romaji}</Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        ))}
      </SimpleGrid>

      <Flex gap={2} p={2} mt={4} alignItems={"center"}>
        {pageInfo.currentPage > 1 && (
          <Link href={`/information/${pageInfo.currentPage - 1}`}>{"<"}</Link>
        )}
        <Badge>Page {pageInfo.currentPage}</Badge>
        <Link href={`/information/${pageInfo.currentPage + 1}`}>{">"} </Link>
      </Flex>

      {selectedAnimeId && (
        <AnimeModal
          onClose={() => {
            setSelectedAnimeId("");
            onClose();
          }}
          isOpen={isOpen}
          currentAnime={media.find(
            (anime: any) => anime.id === selectedAnimeId
          )}
        />
      )}
    </Box>
  );
}
