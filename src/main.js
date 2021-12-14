require("dotenv").config();
import { ethers } from "ethers";
import poolAbi from "./abis/pool.abi.json";
import PoolUtils from "./utils/pool.utils";

async function main() {
	const provider = new ethers.providers.JsonRpcProvider(
		process.env.PROVIDER_URL || '---- BSC PROVIDER URL ----'
	);
	const poolAddress = {
		BUSD: "0x38506a479e8959150466ce9253c19089fd0907d7",
		ACT: "0x76c05855E1EaeC618Aa56E02027F0C469661435b",
		"ACT-BUSD": "0xfb62ea552eeba8b00cc5db56ba8d7c50429c0001",
	};
	const stakerAddress = "---- Staker Address ----";

	const poolBUSD = new PoolUtils(provider, poolAddress.BUSD, poolAbi);
	const poolACT = new PoolUtils(provider, poolAddress.ACT, poolAbi);
	const poolACTBUSD = new PoolUtils(provider, poolAddress["ACT-BUSD"], poolAbi);

	const [pidsOfBUSDPool, pidsOfACTPool, pidsOfACTBUSDPool] = await Promise.all([
		poolBUSD.getPIDs(stakerAddress),
		poolACT.getPIDs(stakerAddress),
		poolACTBUSD.getPIDs(stakerAddress),
	]);

	const getInfo = async (poolContract, pid) => {
		const [stakingToken, rewardToken, stakingAmount, pendingReward] =
			await Promise.all([
				poolContract.getStakingToken(),
				poolContract.getRewardToken(),
				poolContract.getStakingAmount(pid),
				poolContract.getPendingReward(pid),
			]);

		return {
			pid,
			stakingToken,
			rewardToken,
			stakingAmount,
			pendingReward,
		};
	};

	const contracts = await Promise.all([
		...pidsOfBUSDPool.map((pid) => getInfo(poolBUSD, pid)),
		...pidsOfACTPool.map((pid) => getInfo(poolACT, pid)),
		...pidsOfACTBUSDPool.map((pid) => getInfo(poolACTBUSD, pid)),
	]);

	console.log(contracts);
}

main();
