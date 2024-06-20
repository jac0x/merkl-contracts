import { deployments, ethers } from 'hardhat';

import { DistributionCreator, DistributionCreator__factory } from '../typechain';
import { parseEther,parseUnits, getAddress } from 'ethers/lib/utils';
import { registry } from '@angleprotocol/sdk';
import { BigNumber } from 'ethers';
import { BASE_PARAMS } from '../test/hardhat/utils/helpers';

const USER = '0xFC85C07C3e0D497d97F287a70C6b2fA5CD5fdBE0';

async function main() {
  let manager: DistributionCreator;
  const { deployer } = await ethers.getNamedSigners();
  const chainId = (await deployer.provider?.getNetwork())?.chainId;
  console.log('chainId', chainId)
  const distributionCreator = registry(chainId as unknown as number)?.Merkl?.DistributionCreator // (await deployments.get('DistributionCreator')).address;

  if (!distributionCreator) {
    throw new Error('Distribution Creator address not found');
  }

  manager = new ethers.Contract(
    distributionCreator,
    DistributionCreator__factory.createInterface(),
    deployer,
  ) as DistributionCreator;

  const res = await (
    await manager
      .connect(deployer)
      .setUserFeeRebate(getAddress(USER), BigNumber.from(BASE_PARAMS))
  ).wait();
  
  console.log(res);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
