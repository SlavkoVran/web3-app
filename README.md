# NFT Image Display and Metamask Integration

## Overview

This project showcases NFT image listing and display using the OpenSea API. Users can connect their Metamask wallet to access protected pages, such as the "Profile" page, to view their account information.

## Installation

Before you begin the installation process, you need to complete the following prerequisites:

1. **Obtain an OpenSea API Key**: You will need to have an API key from OpenSea. For more information on how to obtain an API key, visit [OpenSea API Keys](https://docs.opensea.io/reference/api-keys).

2. **Create a MetaMask Wallet**: To interact with the MetaMask integration in this project, you should have a MetaMask wallet. If you don't have one, you can create one by visiting [MetaMask](https://metamask.io/).

Once you've met these prerequisites, you can proceed with the installation:

1. Clone this repository: `git clone https://github.com/SlavkoVran/web3-app`
2. Navigate to the project directory: `cd yourproject`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root of your project and set your OpenSea API key as follows: REACT_APP_OPENSEA_API_KEY = "YOUR_API_KEY"


5. Start the development server: `npm start`

Your project is now up and running on `http://localhost:3000`.

## Used Libraries

This project is built using various libraries to enhance functionality and design. Here's a list of the main libraries used:

- **React Router**: Used for navigation and routing in the application. [Official Documentation](https://reactrouter.com/)
- **Material-UI**: Provides the core design components and styles for the user interface. [Official Documentation](https://material-ui.com/)
- **Material-UI Icons**: Offers a wide range of icons for use in the project. [Official Repository](https://github.com/mui-org/material-ui)
- **React Pagination**: Used to implement pagination for the list of NFTs. [Official Repository](https://github.com/vayser/react-paginate)
- **Ethers.js**: Facilitates interaction with the Ethereum blockchain and MetaMask wallet integration. [Official Documentation](https://docs.ethers.io/v5/)

Make sure to install these libraries and their dependencies by running `npm install` before starting the development server.

For more details on each library, you can refer to their official documentation and repositories to learn about their features, usage, and updates.

## Usage

Here's how you can use this project:

- List and display NFT images from OpenSea.
- Connect your MetaMask wallet to access the "Profile" page and view your account information.

## NFT Image Display

This project uses the OpenSea API to fetch and display NFT images. Here's how it works:

1. Navigate to the NFT page.
2. The application will make a request to the OpenSea API to fetch a list of NFTs.
3. The NFT images and titles will be displayed on the page.

## Metamask Integration

Users can connect their MetaMask wallet to access additional features:

1. Click "Connect Wallet" to establish a connection.
2. Once connected, the "Connect Wallet" button is replaced with "Disconnect Wallet."
3. A "Profile" link becomes accessible, leading to the protected profile page.
4. In the "Profile" page, users can view their account information and MetaMask-related data.


## Authors

- [Slavko Vranesevic](https://github.com/SlavkoVran)
