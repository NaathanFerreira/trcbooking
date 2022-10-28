import * as yup from "yup";

const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;
const rgRegex = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;
const phoneNumberRegex = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;

export const createGuestFormSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  rg: yup
    .string()
    .required("RG obrigatório")
    .test("RG válido", "RG inválido", (rg: any) => rgRegex.test(rg)),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .test("CPF válido", "CPF inválido", (cpf: any) => cpfRegex.test(cpf)),
  phoneNumber: yup
    .string()
    .required("Telefone obrigatório")
    .test("Telefone válido", "Telefone inválido", (phoneNumber: any) =>
      phoneNumberRegex.test(phoneNumber)
    ),
  birthDate: yup.string().required("Data de nascimento obrigatório"),
});
