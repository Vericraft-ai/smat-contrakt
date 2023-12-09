// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // declare the version of solidity to compile this contract. This must match the version of solidity in your hardhat.config.js file

// import ERC-721 URI storage extension standard and Counters.sol which will help set token IDs from OpenZepplin
// add ownable and ERC721.sol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// @dev This function instantiates the contract for AnkrPolygonNFT and classifies ERC-721 for storage schema
contract VericraftNFT is ERC721URIStorage, Ownable {

/* @dev Set up our counters
* @param Counters will create unique TokenIds for each mint of the ERC-721 token
* @return This will return the current TokenId
*/
    // using Counters for Counters.Counter;

/* @dev Store our counter
* @param The TokenId will be stored based on the current count
* @return This will store the current TokenId
*/
    // uint256 private _tokenIdCounter;
    uint256 private _tokenId;


// pass arguments for name and symbol
/* @dev Set the name and token tracker for our contract
* @return This will name the token each time it is minted
*/
    constructor(address initialOwner) Ownable(initialOwner) ERC721("VericraftNFT", "VCNFT") {}

/* @dev This will set the mint function for the token with the URI and recipient specified
* @param tokenURI specifies the schema and
* @return This will set the name, image, description, and properties
*/
    function mint(address recipient, string memory tokenURI) public onlyOwner returns (uint256){

/* @dev Set the token owner by retrieving the address from recipient
* @param recipient is the wallet address for the receiver and newItemId is current tokenId
* @return Receiver of ERC-721 and tokenId
*/
        _safeMint(recipient, _tokenId);

/* @dev Set the token URI and new TokenId
* @param newItemId is current tokenId and new tokenURI
* @return Current TokenId and tokenURI
*/
        _setTokenURI(_tokenId, tokenURI);

// return current newItemId for the ERC-721 token
        unchecked {
            _tokenId++;
        }
    }
}