import { deployments, ethers } from 'hardhat';

import { Distributor, Distributor__factory } from '../typechain';
import { parseEther,parseUnits, getAddress } from 'ethers/lib/utils';
import { registry } from '@angleprotocol/sdk';

async function main() {
  let distributor: Distributor;
  const { deployer } = await ethers.getNamedSigners();
  const chainId = (await deployer.provider?.getNetwork())?.chainId;
  console.log('chainId', chainId)
  console.log('deployer', deployer.address)
  const distributorAddress = registry(chainId as unknown as number)?.Merkl?.Distributor // (await deployments.get('DistributionCreator')).address;

  if (!distributorAddress) {
    throw new Error('Manager address not found');
  }

  distributor = new ethers.Contract(
    distributorAddress,
    Distributor__factory.createInterface(),
    deployer,
  ) as Distributor;

  console.log('Toggling operator');
  
    await distributor
      .connect(deployer)
      .toggleOperator('0x392B1E6905bb8449d26af701Cdea6Ff47bF6e5A8','0xeeF7b7205CAF2Bcd71437D9acDE3874C3388c138')

  console.log('OK1')
/*
  await distributor
  .connect(deployer)
  .toggleOperator('0xC47bB288178Ea40bF520a91826a3DEE9e0DbFA4C','0xeeF7b7205CAF2Bcd71437D9acDE3874C3388c138')
  
  console.log('OK2');
  */
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
