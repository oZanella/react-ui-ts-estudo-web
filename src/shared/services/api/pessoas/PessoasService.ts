import { Environment } from '../../../environment';
import { Api } from '../axios-config';


const getAll = async (page = 1, filter = ''): Promise<any> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data } = await Api.get(urlRelativa);

  } catch (error) {

  }
};

const getByld = async (): Promise<any> => { };

const create = async (): Promise<any> => { };

const updateByld = async (): Promise<any> => { };

const deleteByld = async (): Promise<any> => { };


export const PessoasService = {
  getAll,
  getByld,
  create,
  updateByld,
  deleteByld,
};
