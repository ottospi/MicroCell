import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import alert from '../../assets/alert.svg';
import logoImg from '../../assets/logo.svg';
import { ImportFileContainer, Footer, H2 } from './styles';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';
import Buttonx from '../../components/Button';

import { Table, CardDeck, Card, Col, Row, Container } from 'react-bootstrap';

const Home: React.FC = () => {
  interface FileProps {
    file: File;
    name: string;
    readableSize: string;
  }

  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();
    const file = uploadedFiles[0];
    data.append('file', file.file, file.name);

    try {
      // await api.post('/transactions/import', data);
      // history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles(uploadFiles);
  }

  return (
    <Container fluid>
      <Row>
      <Col>
        <h1>
          <img src={logoImg} alt="Micro"/>
          MicroCell
        </h1>
        <h2>Analise sua célula</h2>

      </Col>
    </Row>
      <CardDeck>
        <Card>
          <Card.Body>
            <ImportFileContainer>
              <Upload onUpload={submitFile} />
              {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

                <Footer>
                  <p>
                    <img src={alert} alt="Alert" />
                    Apenas .csv TROCAR quando for deploy
                  </p>
                  <Buttonx onClick={handleUpload} type="button">
                    Analisar
                  </Buttonx>
                </Footer>
              </ImportFileContainer>
            </Card.Body>
          </Card>
        <Card>
        <Card.Header as="h5">
          <H2>Resultado da Análise</H2>
          </Card.Header>
          <Card.Body>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Célula</th>
                  <th>Acerto (%)</th>
                  <th>Erro (%)</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neutrófilo</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Eosinófilo</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Linfócito</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>Monócito</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>

          </Card.Body>
        </Card>
      </CardDeck>


  </Container>
  )
};

export default Home;
