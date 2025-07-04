
# 🚀 BuilderPay

BuilderPay is a next-generation Web3 platform empowering builders by connecting them directly with donors — no scores, badges, or gatekeepers. Donors can choose to fund individual builders directly or contribute to a pooled funding model that distributes incentives to builders based on reputation metrics like Superchain reputation or CeloPG scores.



✨ Key Features

✅ **Direct Donations** – Donors can fund builders individually, with incentives from staking going directly to the chosen builder.

✅ **BuilderPay Pool Donations** – Donors can contribute to BuilderPay’s pooled fund, where incentives from staking are redistributed to builders proportionally based on their Superchain reputation or CeloPG scores.

✅ **AutoComp.Finance Integration** – All donated funds are invested in DeFi strategies to generate yield, with incentives auto-reinvested for compounding growth.

✅ **Stablecoin Support with Mento** – Donations in any supported Celo asset (CELO, cEUR, cREAL) are automatically swapped on-chain to stablecoins like cUSD using Mento.

✅ **Superchain Compatibility** – BuilderPay supports deployments on Celo Mainnet and OP Superchain chains (e.g., Optimism, Base), allowing cross-chain donations, staking, and reputation tracking.

✅ **Self.ID Integration** – Builders create decentralized, self-sovereign identities to prove authenticity and build trust with donors across chains.

🛠️ How It Works

1️⃣ Donor chooses donation type:
- **Direct Donation** → specify a builder → funds staked → builder receives incentives.
- **Pooled Donation** → donate to BuilderPay pool → funds staked → incentives distributed to multiple builders based on their reputation scores.

2️⃣ **Staking Module**:
- Funds from both individual and pooled donations are invested into yield farming strategies (e.g., Moola, Ubeswap on Celo, Velodrome/Sonne on OP Superchain).

3️⃣ **Redistribution Engine** (for pooled donations):
- Uses builders’ Superchain reputation or CeloPG scores to calculate each builder’s share of staking incentives.
- Builders with higher scores receive a greater portion of the pooled incentives.

4️⃣ **Withdrawal**:
- Direct donations → builder withdraws original donation + yield.
- Pooled donations → builders claim their proportional share of incentives.

5️⃣ **Identity Verification**:
- Builders maintain a verifiable Self.ID profile across chains.

---

## 🖼️ Architecture Overview

```

DONOR
│
├── Direct Donation ───────────► BuilderPay Smart Contract (Individual Builder Mode)
│                                  │
│                                  ▼
│                          Staking Module
│                                  │
│                                  ▼
│                          Builder receives
│                          original + yield
│
└── BuilderPay Pool Donation ──► BuilderPay Smart Contract (Pooled Mode)
│
▼
Staking Module
│
▼
Redistribution Engine
│
Superchain/CeloPG scores
│
▼
Builders receive proportional incentives

```

---

## 🌐 Supported Protocols & Tools

- **DeFi Strategies**:
  - Moola Market, Ubeswap (Celo)
  - Velodrome, Sonne (OP Chains)

- **Stablecoin Swaps**:
  - Mento (Celo)
  - Velodrome (OP Chains)

- **Bridges**:
  - Official OP Bridge for Superchain donations

- **Reputation Metrics**:
  - Superchain Reputation Score (on-chain activity/achievements)
  - CeloPG Score (Celo community reputation system)

- **Identity**:
  - Self.ID / IDX decentralized identity for builders

---

## 📦 Repository Structure

```

.
├── contracts/           # BuilderPay, AutoComp, Redistribution Solidity contracts
├── frontend/            # React/Next.js DApp frontend
├── scripts/             # Deployment, bridging, and test scripts
├── docs/                # Diagrams and technical documentation
└── README.md            # This file

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Deploy contracts

For Celo:

```bash
npx hardhat run scripts/deploy-celo.js --network celo
```

For OP Superchain:

```bash
npx hardhat run scripts/deploy-op.js --network optimism
```

### 3. Start frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use BuilderPay locally.

---

## ✅ Roadmap

* [x] Direct donations with staking
* [x] BuilderPay pooled donations
* [x] Redistribution engine with reputation-based allocation
* [x] Stablecoin payments via Mento
* [x] Self.ID integration
* [ ] Advanced analytics dashboard
* [ ] Governance module for builders
* [ ] Automated cross-chain bridging

---

## 🤝 Contributing

We welcome PRs! Please fork the repo, create a new branch, and open a pull request with your changes.

---

## 📝 License

MIT License © 2025 BuilderPay Team

---

## 📫 Contact

Questions or support? Reach out at [builderpay@example.com](mailto:builderpay@example.com) or open an issue in this repo.

```

---

Would you like a **whitepaper section** or **smart contract skeleton** for this dual-mode donation logic?
```
