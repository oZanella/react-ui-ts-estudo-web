import { Environment } from '../../../environment';
import { Api } from '../axios-config';


interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

interface IDetalhePessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
}


const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar os registros.');

  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getByld = async (id: number): Promise<IDetalhePessoa | Error> => {     //defini no async que o id=number
  try {
    const { data } = await Api.get(`/pessoas/${id}`);   //ajustei a url para pegar o id das pessoas

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro.');

  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro. ');
  }
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => //Omit não vai solicitar o Id na hora da busca
{
  try {
    const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);  //ajustei a url para pegar os dados de IDetalhePessoa e mandar junto com pessoas quando for realizada a busca

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');

  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro. ');
  }
};

const updateByld = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => { //void significa que não retorna nada
  try {
    await Api.put(`/pessoas/${id}`, dados);   //ajustei a url para pegar os dados de IDetalhePessoa e mandar junto com pessoas quando for realizada a busca

  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro. ');
  }
};

const deleteByld = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);   //Api.delele vai apagar o registro de pessoas que foi criado/tem salvo no banco de dados

  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro. ');
  }
};


export const PessoasService = {
  getAll,
  getByld,
  create,
  updateByld,
  deleteByld,
};
