
const { ethers } = require("ethers");

class PoolUtils {
    constructor(provider, poolAddress, poolAbi) {
        this.provider = provider;
        this.poolContract = new ethers.Contract(poolAddress, poolAbi, provider);
    }

    async getPIDs (staker) {
        const pids = [];
        const stakers = await this.poolContract.getPeople();
    
        for (let pid = 0; pid < stakers.length; pid++) {
            if (staker === stakers[pid]) {
                const contract = await this.poolContract.peoples(pid);
    
                if (contract.balanceAmount > 0) {
                    pids.push(pid);
                }
            }
        }
    
        return pids;
    }

    async getStakingToken() {
        return await this.poolContract.mainSyrupToken();
    };
    
    async getStakingAmount(pid) {
        const contract = await this.poolContract.peoples(pid);
        const stakingAmount = ethers.utils.formatUnits(contract.depositAmount, 18);
        
        return Number(stakingAmount);
    };
    
    async getRewardToken() {
        return await this.poolContract.mainRewardsToken();
    };
    
    async getPendingReward(pid) {
        const currentBlockNumber = await this.provider.getBlockNumber();
        const contract = await this.poolContract.peoples(pid);
        const remainingBlockNumber = Number(currentBlockNumber) - Number(contract.blockStart);
        const rewardPerBlock = ethers.utils.formatUnits(contract.rewardPerBlock, 18);
    
        return rewardPerBlock * remainingBlockNumber;
    };
}

export default PoolUtils;