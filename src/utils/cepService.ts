import { Alert } from 'react-native';

interface CepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export const searchCep = async (cep: string): Promise<CepResponse | null> => {
  try {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) return null;

    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await response.json();

    if (data.erro) {
      Alert.alert('CEP não encontrado', 'Verifique o CEP informado e tente novamente.');
      return null;
    }

    return data;
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível buscar o CEP. Tente novamente mais tarde.');
    return null;
  }
};