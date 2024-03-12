import { deployments, ethers } from 'hardhat';

import { DistributionCreator, DistributionCreator__factory } from '../typechain';
import { parseEther,parseUnits } from 'ethers/lib/utils';
import { parseAmount } from '../utils/bignumber';

async function main() {
  let manager: DistributionCreator;
  const { deployer } = await ethers.getNamedSigners();
  const managerAddress = (await deployments.get('DistributionCreator')).address;

  manager = new ethers.Contract(
    managerAddress,
    DistributionCreator__factory.createInterface(),
    deployer,
  ) as DistributionCreator;

  console.log('Setting reward token min amount');
  await (
    await manager
      .connect(deployer)
      .setRewardTokenMinAmounts(['0x4104b135DBC9609Fc1A9490E61369036497660c8'], [parseEther('1')])
  ).wait();
  // 18 decimals
  // 000000000000000000
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
