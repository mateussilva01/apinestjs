import * as bcrypt from 'bcrypt';

export const hashingPassword = async (senha: string) => await bcrypt.hash(senha, 12);

export const verificarSenha = async (senha: string, usuarioSenha: string) => await bcrypt.compare(senha, usuarioSenha);