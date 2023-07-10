import { Link } from "react-router-dom";
import { routeData } from "../../utils/routeData";
import { routerType } from "../../interface/router.type";
import { Container, Card, Row, Text, Col, Grid } from "@nextui-org/react";
import "./styles/styles.css";

const AppContainer = () => {
  return (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <Text h1>Veuillez sélectionner votre application :</Text>
      <Row gap={1}>
        {/* TODO: Manage user rights to access applications */}
        {routeData.map(
          ({ path, title, users, description, img }: routerType) => {
            return (
              <Col key={title}>
                <Card>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src={img}
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {title}
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>{path}</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>{description}</Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link color="primary" target="_blank" to={path}>
                      Visit our App.
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};

export default AppContainer;
