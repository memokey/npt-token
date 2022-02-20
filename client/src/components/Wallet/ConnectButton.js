import { useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { setTokenBalance } from '../../reducers/contractReducer';

export default function ConnectButton() {

  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.contract);

  const handleClick = async () => {
    window.personalContract.methods.balanceOf(window.address).call()
      .then((res) => {
        dispatch(setTokenBalance(res));
      })
  }

  return !!window.address ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.50"
      border="1px solid"
      borderColor="gray.400"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="gray.800" fontSize="md">
          <nobr>{contract.balance} NPT</nobr>
        </Text>
      </Box>
      <Button
        bg="gray.300"
        border="1px solid"
        borderColor="gray.400"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.200",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="gray.900" fontSize="md" fontWeight="medium" mr="2">
          {!!window.address &&
            `${window.address.slice(0, 6)}...${window.address.slice(
              window.address.length - 4,
              window.address.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button onClick={handleClick}>Connect to a wallet</Button>
  );
}