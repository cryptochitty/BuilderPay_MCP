// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BuilderPaySupporters {
    struct Supporter {
        string supporterType; // "individual" or "organization"
        string fullName;
        string email;
        string phone;
        string country;
        string linkedin;
        bool exists;
    }

    mapping(address => Supporter) private supporters;

    event SupporterRegistered(address indexed supporterAddress, string fullName, string email);

    modifier notRegistered() {
        require(!supporters[msg.sender].exists, "Already registered");
        _;
    }

    modifier onlyRegistered() {
        require(supporters[msg.sender].exists, "Not registered");
        _;
    }

    function registerSupporter(
        string memory _supporterType,
        string memory _fullName,
        string memory _email,
        string memory _phone,
        string memory _country,
        string memory _linkedin
    ) public notRegistered {
        supporters[msg.sender] = Supporter({
            supporterType: _supporterType,
            fullName: _fullName,
            email: _email,
            phone: _phone,
            country: _country,
            linkedin: _linkedin,
            exists: true
        });

        emit SupporterRegistered(msg.sender, _fullName, _email);
    }

    function isRegistered(address _addr) public view returns (bool) {
        return supporters[_addr].exists;
    }

    function getSupporter(address _addr) public view onlyRegistered returns (Supporter memory) {
        return supporters[_addr];
    }
}
