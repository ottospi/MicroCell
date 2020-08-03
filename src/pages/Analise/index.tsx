import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import filesize from 'filesize';

import { Form } from '@unform/web';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background, ImportFileContainer, Footer, Logo } from './styles';

import alert from '../../assets/alert.svg';
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

const Analise: React.FC = () => {
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
  <Container>
    <Background>
    </Background>

    <Content>
      <Logo>
        <h1>
        <img src={logoImg} alt="MicroCell"/>
        MicroCell</h1>
      </Logo>

        <h2>Analise sua célula</h2>

        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Apenas .png por enquanto
            </p>
            {/* <button onClick={handleUpload} type="button">
              Enviar
            </button> */}
          </Footer>
        </ImportFileContainer>

        <Button type="submit">Analisar</Button>


      <a href="logIn">
        <FiArrowLeft />
        Voltar
      </a>
    </Content>
  </Container>)
};

export default Analise;
