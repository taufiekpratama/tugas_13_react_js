import "semantic-ui-css/semantic.min.css";
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Form,
  Button,
  Divider,
  Icon,
  Input,
  Search,
  Header,
  Table,
  Container,
  Label,
  Menu,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />

      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Cari document
              </Header>
              <Search placeholder="Search document" />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah Document
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      <br />
      <Grid columns={3}>
        <Grid.Column width="5">
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width="7">
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width="3">
          <List>
            <h3>Website Terkait</h3>
            <List.Item icon="linkify" content={<a>Google</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Facebook</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Semantic UI</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Niomic</a>}></List.Item>
            <List.Item icon="linkify" content={<a>React</a>}></List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <br />
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan="3">
                <Search placeholder="Search document..." />
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar CSS
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Panduan Belajar React JS
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3" textAlign="right">
                <Menu pagination>
                  <Menu.Item icon="chevron left"/>
                  <Menu.Item name="1"/>
                  <Menu.Item name="2"/>
                  <Menu.Item name="3"/>
                  <Menu.Item name="4"/>
                  <Menu.Item icon="chevron right"/>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  );
}

export default App;
