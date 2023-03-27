export default class Filme {
  Id: number;
  Nome?: string | null;
  URLPoster: string | null;
  URLCapa: string | null;
  URLTrailer: string | null;
  Diretor: string | null;
  Ano: string | null;
  Resumo: string | null;
  EmCartaz: Boolean;
  EmBreve: Boolean;
  Classificacao: string | null;
  Duracao: string | null;
}
