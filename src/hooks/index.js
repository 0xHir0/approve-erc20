import {
  ERC20Interface,
  useContractCalls,
  useEthers,
  useTokenList,
} from '@usedapp/core';

export const useTokensBalance = (tokenList, account) => {
  return useContractCalls(
    tokenList && account
      ? tokenList.map((token) => ({
          abi: ERC20Interface,
          address: token.address,
          method: 'balanceOf',
          args: [account],
        }))
      : []
  );
};
