"use client";

import { Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface SearchBarProps extends InputProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, ...rest }) => {
  return (
    <InputGroup borderRadius={5} size="sm">
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.600" />
      </InputLeftElement>
      <Input
        focusBorderColor="brand.primary"
        type="text"
        placeholder={placeholder}
        border="1px solid #718096"
        {...rest}
      />
    </InputGroup>
  );
};

export default SearchBar;
