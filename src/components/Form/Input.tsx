import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: any;
}

function getMaskType(mask: string) {
  switch (mask) {
    case "rg":
      return "99.999.999-9";
      break;
    case "cpf":
      return "999.999.999-99";
      break;
    case "phoneNumber":
      return "(99) 99999-9999";
      break;
    default:
      return;
  }
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        as={InputMask}
        mask={getMaskType(name)}
        maskchar={" "}
        id={name}
        name={name}
        focusBorderColor={"yellow.500"}
        bgColor={"gray.900"}
        variant="filled"
        ref={ref}
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
