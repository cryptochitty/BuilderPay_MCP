// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegisterBuilder {
    struct Builder {
        string name;
        string username;
        string bio;
        string github;
        string twitter;
        string website;
        string skills;
        string profileImageUri;
        bool registered;
    }

    mapping(address => Builder) public builders;
    address[] public registeredAddresses;

    event BuilderRegistered(address indexed builder, string username);

    function registerBuilder(
        string memory name,
        string memory username,
        string memory bio,
        string memory github,
        string memory twitter,
        string memory website,
        string memory skills,
        string memory profileImageUri
    ) public {
        require(!builders[msg.sender].registered, "Already registered");

        builders[msg.sender] = Builder(
            name,
            username,
            bio,
            github,
            twitter,
            website,
            skills,
            profileImageUri,
            true
        );

        registeredAddresses.push(msg.sender);

        emit BuilderRegistered(msg.sender, username);
    }

    function getBuilder(address addr) public view returns (Builder memory) {
        return builders[addr];
    }

    function getAllBuilders() public view returns (Builder[] memory) {
        uint256 total = registeredAddresses.length;
        Builder[] memory allBuilders = new Builder[](total);

        for (uint256 i = 0; i < total; i++) {
            allBuilders[i] = builders[registeredAddresses[i]];
        }

        return allBuilders;
    }

    function getRegisteredAddresses() public view returns (address[] memory) {
        return registeredAddresses;
    }

    function isRegistered(address user) public view returns (bool) {
        return builders[user].registered;
    }
}
