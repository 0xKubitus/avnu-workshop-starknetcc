import { useMemo } from "react";

import { Flex, Text } from "@chakra-ui/react";

import {
  useTransactionManager,
  useWaitForTransaction,
} from "@starknet-react/core";

export default function CurrentTransaction() {
  // TODO get the last transaction hash using useTransactionManager hook
  const { hashes } = useTransactionManager();
  const lastHash = useMemo(() => {
    return hashes[hashes.length - 1];
  }, [hashes]);
  // TODO use useWaitForTransaction hook to get the last transaction hash status
  const { data, isLoading } = useWaitForTransaction({
    hash: lastHash,
    watch: true,
  });
  return (
    <Flex direction="column">
      <Text>Last transaction status</Text>
      {!isLoading && data && (hashes.length === 0 ? "-" : data?.status)}
    </Flex>
  );
}
