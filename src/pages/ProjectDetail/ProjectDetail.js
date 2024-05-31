import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BlogImage from "../../components/BlogImage/BlogImage";
import "./ProjectDetail.css";
import { useParams } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Merriweather",
  },
});

const renderOptions = (links) => {
  const assetMap = new Map();

  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <BlogImage src={asset.url} alt={asset.title}></BlogImage>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Typography variant="body2" component="p" marginTop={2}>
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="section-title">{children}</h2>;
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <List>{children}</List>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return (
          <ListItem disablePadding sx={{ paddingLeft: "1rem" }}>
            <ListItemText
              primary={`● ${children[0].props.children[0]}`}
            ></ListItemText>
          </ListItem>
        );
      },
    },
  };
};

const ProjectDetailTest = () => {
  const params = useParams();

  const PROJECT = gql`
  {
    projectCollection(where: {slug:"${params.slug}"} limit:1){
      items{
        title
        readTime
        body {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;
  const { loading, error, data } = useQuery(PROJECT);

  if (error) console.log(`error fetching data: ${error}`);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {loading ? (
          <Box marginTop="3rem">
            <Skeleton width="40%" height={30}></Skeleton>
            <Skeleton width="90%" height={100}></Skeleton>
            <Skeleton width="70%" height={50}></Skeleton>
            <Skeleton width="70%" height={50}></Skeleton>
            <Skeleton width="60%" height={50}></Skeleton>
            <Skeleton width="100%" height={500}></Skeleton>
          </Box>
        ) : (
          <>
            <BreadCrumbs
              projectTitle={data?.projectCollection.items[0].title}
            ></BreadCrumbs>
            <Box marginBottom="3rem">
              <h1 className="heading dm-serif-display-regular ">
                {data?.projectCollection.items[0].title}
              </h1>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTimeIcon fontSize="small"></AccessTimeIcon>
                <Typography fontSize="small" marginX="0.5em">
                  {data?.projectCollection.items[0].readTime} min read
                </Typography>
              </Box>
            </Box>
            {loading ? (
              <span>loading...</span>
            ) : (
              documentToReactComponents(
                data?.projectCollection.items[0].body.json,
                renderOptions(data?.projectCollection.items[0].body.links)
              )
            )}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ProjectDetailTest;
